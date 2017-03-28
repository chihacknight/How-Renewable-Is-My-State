// define width and height
var margin = 0;
var width = 960 - margin;
var height = 600 - margin;
// get year and energy type
var year;
var e_type;

function drawMap(geo_data) {
  // create svg element & define default map and path generator & color scale
  var path = d3.geoPath();
  var svg = d3.select("body")
              .append("svg")
              .attr("width", width)
              .attr("height", height);
  var color = d3.scaleLinear()
                .domain([0, 0.25, 0.5, 0.75, 1])
                .range(d3.schemeYlGn[5]);;

  function colorMap(err, energy_data, states) {
    if (err) throw err;

    // draw homepage states
    svg.append("g")
         .attr("class", "states")
         .selectAll("path")
         .data(topojson.feature(geo_data, geo_data.objects.states).features)
         .enter().append("path")
         .attr("d", path)
         .attr("fill", "gray")
         .attr("stroke", "white")
         .on("mouseover", function(){
           d3.select(this)
           .transition()
           .duration(100)
           .attr("opacity", "0.7");}
         )
         .on("mouseout", function(){
           d3.select(this)
           .transition()
           .duration(100)
           .attr("opacity", "none");}
         );

    function updateColor(year, e_type) {
      // filter data
      var filtered = energy_data.filter(function(d){
              return d.year == year && d.msn == e_type;
      })
      // update color scale
      var filtered_values = [];
      for (var i = 0; i < filtered.length; i++) {
        filtered_values.push(filtered[i].data);
      }

      var min_max = d3.extent(filtered_values);

      if (min_max[0] == 0 && min_max[1]==0){
          alert("Sorry, data not available. Please choose another energy type/year.");
      }

      var normalize = d3.scaleSqrt()
                        .domain(min_max)
                        .range([0, 1]);
      // update color (fill)

      // ************************************************** //
      // unnecessary function but need to update the model  //
      // ************************************************** //
      function extractKeyValue(obj, value) {return Object.keys(obj)[Object.values(obj).indexOf(value)];};

      if (year != undefined && e_type != undefined){

      svg.selectAll("path")
        .transition()
        .duration(300)
        .attr("fill", function(d){
          var datum = filtered.find(function(energy_datum){
            return energy_datum.statecode == extractKeyValue(states, parseInt(d.id));
          })
          if (datum != undefined){
            return color(normalize(datum.data));
          } else{
            return "gray";
          }
        });

        // update legend
        var legend_text = [d3.min(filtered_values), d3.quantile(filtered_values, 0.25),
                         d3.quantile(filtered_values, 0.5), d3.quantile(filtered_values, 0.75),
                         d3.max(filtered_values)];

      }
     } // end of function updateColor

     // change map with drop down selections
     var years = new Set();

     energy_data.forEach(function(d){ years.add(d.year);});

     d3.select("#e_types")
           .on("change", function() {
               e_type = document.getElementById("e_types").value;
               updateColor(year, e_type);
             });

     var year_dropdown = d3.select("#year_dropdown");

     var options = year_dropdown.selectAll("option")
                                 .data(Array.from(years))
                                 .enter()
                                 .append("option");

     options.text(function(d) {return d;})
            .attr("value", function (d) {return d;});

     year_dropdown.on("change", function() {
               year = d3.event.target.value;
               updateColor(year, e_type);
      });


  } // end of function colorMap

  d3.queue()
        .defer(d3.json, "energy.json")
        .defer(d3.json, "states.json")
        .await(colorMap);

} // end of function drawMap


// draw map which calls colorMap
d3.json("http://d3js.org/us-10m.v1.json", drawMap);
