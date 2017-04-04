// ************************************************** //
// unnecessary function and need to update the model  //
// ************************************************** //
function extractKeyValue(obj, value) {return Object.keys(obj)[Object.values(obj).indexOf(value)];};

function updateColor(year, energy_data, states) {

  var color = d3.scaleQuantize()
                .domain([0, 1])
                .range(d3.schemeGreens[5]);;

  var map = d3.select(".Map");

  // filter data
  var renewable_data = energy_data.filter(function(d){
          return d.year == year && d.msn == "RETCB";
  })
  var total_data = energy_data.filter(function(d){
          return d.year == year && d.msn == "TETCB";
  })
  var int_imp_data = energy_data.filter(function(d){
          return d.year == year && d.msn == "ELNIB";
  })
  var interstate_data = energy_data.filter(function(d){
          return d.year == year && d.msn == "ELISB";
  })

  var renewable_values = {};
  var total_values = {};
  var int_imp_values = {};
  var interstate_values = {};
  var renewable_perc = {};

  for (var i = 0; i < total_data.length; i++) {
    renewable_values[renewable_data[i].statecode] = renewable_data[i].data;
    total_values[total_data[i].statecode] = total_data[i].data;
    int_imp_values[int_imp_data[i].statecode] = int_imp_data[i].data;
    interstate_values[interstate_data[i].statecode] = interstate_data[i].data;
  }

  var all_states = Object.keys(states);

  for (var i = 0; i < all_states.length; i++) {
    var renew_dat = renewable_values[all_states[i]];
    var tot_dat = total_values[all_states[i]];
    var int_imp_dat = int_imp_values[all_states[i]];
    var interstate_dat = interstate_values[all_states[i]];
    renewable_perc[all_states[i]] = renew_dat / (tot_dat-int_imp_dat-interstate_dat);
  }

  var min_max = d3.extent(d3.values(renewable_perc));

  if (min_max[0] == 0 && min_max[1]==0){
      alert("Sorry, data not available. Please select another energy type/year.");
  }

  var normalize = d3.scaleSqrt()
                    .domain(min_max)
                    .range([0, 1]);
  // update color (fill)
  map.selectAll("path")
     .attr("fill", function(d){
      state = extractKeyValue(states, parseInt(d.id));
      if (state != undefined){
        return color(normalize(renewable_perc[state]));
      } else{
        return "gray";
      }
    });

  map.selectAll("path")
     .on("mouseout", function(){
       d3.select(this)
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

    var new_legend = map.selectAll('text');

    new_legend.text(function(d, i) {return legend_text[i];});


 } // end of function updateColor

function drawMap(geo_data) {
  // define width and height
  var width = 700;
  var height = 400;
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
  var legendBoxSettings = {
         width: 60,
         height: 15,
         y: legendContainerSettings.y
       };

  // create svg element & define default map, path generator, color scale & legend container
  var path = d3.geoPath();
  var map = d3.select(".Map")
              .append("svg")
              .attr("width", width)
              .attr("height", height);

  var color = d3.scaleQuantize()
                .domain([0, 1])
                .range(d3.schemeGreens[5]);;

  function colorMap(err, energy_data, states) {
    if (err) throw err;
    // draw default line charts

    drawChart(energy_data, "US", states);
    drawSidePanel(energy_data, "US", 2014, states);
    // draw homepage states
    map.append("g")
         .attr("class", "states")
         .selectAll("path")
         .data(topojson.feature(geo_data, geo_data.objects.states).features)
         .enter().append("path")
         .attr("d", path)
         .attr("fill", "gray")
         .attr("stroke", "white")
         .attr("transform", 'scale(0.66, 0.66)')
         .on("mouseover", function(){
           d3.select(this)
           .attr("fill", "orange");
         })
         .on("mouseout", function(){
           d3.select(this)
           .attr("fill", "gray");
         })
         .on("click", function(d){
           drawChart(energy_data, extractKeyValue(states, parseInt(d.id)), states);
           drawSidePanel(energy_data, extractKeyValue(states, parseInt(d.id)), 2014, states);
         });

    var legend_data = [0, 0.25, 0.5, 0.75, 1]; // 5 quantiles

    var legend = map.selectAll("g.legend")
                     .data(legend_data)
                     .enter().append("g")
                     .attr("class", "legend")
                     .attr("transform", "translate(0,"+5+")");

    legend.append("rect")
          .attr('x', function(d, i) {
              return legendContainerSettings.x + legendBoxSettings.width * i;
            })
          .attr('y', legendBoxSettings.y)
          .attr('width', legendBoxSettings.width)
          .attr('height', legendBoxSettings.height)
          .attr("opacity", 0.7)
          .styles({
              'fill': function(d, i){
                return color(d);
              }
          });

    var default_text = ["Please","select","data","to","start"];

    legend.append("text")
          .attr("x", function(d, i){
            return legendContainerSettings.x + legendBoxSettings.width * i + 5;
          })
          .attr("y", legendContainerSettings.y+11)
          .attr("font-size", 11)
          .text(function(d, i){return default_text[i];});

    // code for year dropdown menu
    /*
     // change map with drop down selections
     var years = new Set();
     years.add('-');
     energy_data.forEach(function(d){ years.add(d.year);}); // extrac years in the data set

     var year_dropdown = d3.select("#year_dropdown");

     var options = year_dropdown.selectAll("option")
                                 .data(Array.from(years))
                                 .enter()
                                 .append("option");

     options.text(function(d) {return d;})
            .attr("value", function (d) {return d;});

     year_dropdown.on("change", function() {
               year = d3.event.target.value;
               updateColor(year, energy_data, states);
      });
    */

  } // end of function colorMap

  d3.queue()
        .defer(d3.json, "energy.json")
        .defer(d3.json, "states.json")
        .await(colorMap);

} // end of function drawMap


// draw map which calls colorMap
d3.json("../../data/us-10m.v1.json", drawMap);
