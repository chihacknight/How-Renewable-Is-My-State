// define width and height
var margin = 0;
var width = 960 - margin;
var height = 600 - margin;
// get year and energy type
var year;
var e_type;
// legend setting
var legendContainerSettings = {
              x: width * 0.55,
              y: 0,
              width: 350,
              height: 50,
              roundX: 10,
              roundY: 10
            }

function drawMap(geo_data) {
  // create svg element & define default map, path generator, color scale & legend container
  var path = d3.geoPath();
  var svg = d3.select("body")
              .append("svg")
              .attr("width", width)
              .attr("height", height);
  var color = d3.scaleQuantize()
                .domain([0, 1])
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
         .attr("stroke", "white");

    var legend_data = [0, 0.25, 0.5, 0.75, 1]; // 5 quantiles

    var legendBoxSettings = {
           width: 60,
           height: 10,
           y: legendContainerSettings.y + 20
         };

    var legend = svg.selectAll("g.legend")
                     .data(legend_data)
                     .enter().append("g")
                     .attr("class", "legend");

    legend.append("rect")
          .attr('x', function(d, i) {
              return legendContainerSettings.x + legendBoxSettings.width * i + 30;
            })
          .attr('y', legendBoxSettings.y)
          .attr('width', legendBoxSettings.width)
          .attr('height', legendBoxSettings.height)
          .styles({
              'fill': function(d, i){
                return color(d);
              },
              'stroke': "gray"
          });

    var default_text = ["Please","select","data","to","start"];

    legend.append("text")
          .attr("x", function(d, i){
            return legendContainerSettings.x + legendBoxSettings.width * i + 30;
          })
          .attr("y", legendContainerSettings.y + 15)
          .attr("font-size", 11)
          .text(function(d, i){return default_text[i];});

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
          alert("Sorry, data not available. Please select another energy type/year.");
      }

      var normalize = d3.scaleLinear()
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

          svg.selectAll("path")
             .on("mouseover", function(){
               d3.select(this)
               .transition().duration(100)
               .attr("fill", "steelblue")
             })
             .on("mouseout", function(){
               d3.select(this)
               .transition().duration(100)
               .attr("fill", function(d){
                 var datum = filtered.find(function(energy_datum){
                   return energy_datum.statecode == extractKeyValue(states, parseInt(d.id));
                 })
                 if (datum != undefined){
                   return color(normalize(datum.data));
                 } else{
                   return "gray";
                 }
             })
           });

            // update legend text
            // grouped thousands with two significant digits, "4,200"
            var formatDecimal = d3.format(",.3r");

            var legend_text = [formatDecimal(d3.min(filtered_values)),
                             '>'+formatDecimal(d3.quantile(filtered_values, 0.25)),
                             '>'+formatDecimal(d3.quantile(filtered_values, 0.5)),
                             '>'+formatDecimal(d3.quantile(filtered_values, 0.75)),
                             '>'+formatDecimal(d3.max(filtered_values))];

            var new_legend = svg.selectAll('text');

            new_legend.text(function(d, i) {return legend_text[i];});

        } // end of the if statement to check year & e_type are defined
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
