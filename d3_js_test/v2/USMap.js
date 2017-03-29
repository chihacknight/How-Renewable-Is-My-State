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
                .range(d3.schemeGreens[5]);;

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
         .attr("stroke", "black");

    var legend_data = [0, 0.25, 0.5, 0.75, 1]; // 5 quantiles

    var legendBoxSettings = {
           width: 60,
           height: 15,
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
          .attr("opacity", 0.7)
          .styles({
              'fill': function(d, i){
                return color(d);
              },
              'stroke': "gray"
          });

    var default_text = ["Please","select","data","to","start"];

    legend.append("text")
          .attr("x", function(d, i){
            return legendContainerSettings.x + legendBoxSettings.width * i + 38;
          })
          .attr("y", legendContainerSettings.y + 30)
          .attr("font-size", 11)
          .text(function(d, i){return default_text[i];});

    function updateColor(year) {
      // filter data
      var renewable_data = energy_data.filter(function(d){
              return d.year == year && d.msn == "RETCB";
      })
      var total_data = energy_data.filter(function(d){
              return d.year == year && d.msn == "TETCB";
      })

      var renewable_values = {};
      var total_values = {};
      var renewable_perc = {};
      for (var i = 0; i < total_data.length; i++) {
        renewable_values[renewable_data[i].statecode] = renewable_data[i].data;
        total_values[total_data[i].statecode] = total_data[i].data;
      }

      var all_states = Object.keys(states);

      for (var i = 0; i < all_states.length; i++) {
        var renew_dat = renewable_values[all_states[i]];
        var tot_dat = total_values[all_states[i]];
        renewable_perc[all_states[i]] = renew_dat / tot_dat;
      }

      var min_max = d3.extent(d3.values(renewable_perc));

      if (min_max[0] == 0 && min_max[1]==0){
          alert("Sorry, data not available. Please select another energy type/year.");
      }

      var normalize = d3.scaleSqrt()
                        .domain(min_max)
                        .range([0, 1]);
      // update color (fill)

      // ************************************************** //
      // unnecessary function but need to update the model  //
      // ************************************************** //
      function extractKeyValue(obj, value) {return Object.keys(obj)[Object.values(obj).indexOf(value)];};

      svg.selectAll("path")
        .transition()
        .duration(300)
        .attr("fill", function(d){
          state = extractKeyValue(states, parseInt(d.id));
          if (state != undefined){
            return color(normalize(renewable_perc[state]));
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
             state = extractKeyValue(states, parseInt(d.id));
             if (state != undefined){
               return color(normalize(renewable_perc[state]));
             } else{
               return "gray";
             }
         })
       });

        // update legend text
        // grouped thousands with two significant digits, "4,200"
        var formatDecimal = d3.format(".2f");
        all_perc_values = d3.values(renewable_perc);

        var get_quartile = d3.scaleQuantile()
                             .domain(min_max)
                             .range([0, 1, 2, 3]);

        all_perc_values.sort(function(a, b){return a-b});
        var legend_text = ['min: ' + formatDecimal(d3.min(all_perc_values)*100),
                         'Q1: ' + formatDecimal(d3.quantile(all_perc_values, 0.25)*100) ,
                         'Med: ' + formatDecimal(d3.quantile(all_perc_values, 0.5)*100) ,
                         'Q3: ' + formatDecimal(d3.quantile(all_perc_values, 0.75)*100) ,
                         'max: ' + formatDecimal(d3.max(all_perc_values)*100)
                          ];

        var new_legend = svg.selectAll('text');

        new_legend.text(function(d, i) {return legend_text[i];});


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
