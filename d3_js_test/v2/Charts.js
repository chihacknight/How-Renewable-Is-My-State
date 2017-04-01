function drawChart(energy_data, selectedState, states){

  if ($('#Chart').highcharts() != undefined || $('#SidePanel').highcharts() != undefined) {
    mychart.destroy();
  }

  var total_energy_consumption = energy_data.filter(function(d){
    return d.statecode ==selectedState && d.msn == "TETCB";
  })

  var renew_energy_consumption = energy_data.filter(function(d){
    return d.statecode ==selectedState && d.msn == "RETCB";
  })

  var nuc_energy_consumption = energy_data.filter(function(d){
    return d.statecode ==selectedState && d.msn == "NUETB";
  })

  var fosil_energy_consumption = energy_data.filter(function(d){
    return d.statecode ==selectedState && d.msn == "FFTCB";
  })

  total_energy_values = {};
  renew_energy_values = {};
  nuc_energy_values = {};
  fosil_energy_values = {};

  for (i = 0; i < total_energy_consumption.length; i++){
    total_energy_values[total_energy_consumption[i].year] = total_energy_consumption[i].data;
    renew_energy_values[total_energy_consumption[i].year] = renew_energy_consumption[i].data;
    nuc_energy_values[total_energy_consumption[i].year] = nuc_energy_consumption[i].data;
    fosil_energy_values[total_energy_consumption[i].year] = fosil_energy_consumption[i].data;
  }

  var years = Object.keys(total_energy_values);
  for(i = 0; i < years.length; i++) {years[i] = +years[i];}

  // this is where the magic happens... using highchart library
  mychart = Highcharts.chart('Chart', {
                      title: {
                        text: selectedState + ' Energy Consumption From '+d3.min(years)+' To '+d3.max(years)
                      },
                      subtitle: {
                        text: "(Billion Btu)",
                        align: "left"
                      },
                      yAxis: {
                          title: {
                              text: 'Energy Consumption Amount'
                          },
                          min: 0
                      },
                      plotOptions: {
                          series: {
                              pointStart: d3.min(years),
                              point: {
                                events: {
                                  mouseOver: function() {
                                    updateColor(this.x, energy_data, states);
                                  },
                                  click: function() {
                                    drawSidePanel(energy_data, selectedState, this.x, states)
                                  }
                                }
                              }
                          }
                      },
                      series: [{
                          name: 'Total Energy Consumption',
                          data: Object.values(total_energy_values)
                      }, {
                          name: 'Nuclear Energy Consumption',
                          data: Object.values(nuc_energy_values)
                      }, {
                          name: 'Renewable Energy Consumption',
                          data: Object.values(renew_energy_values)
                      }, {
                          name: 'Fosil Fuel Energy Consumption',
                          data: Object.values(fosil_energy_values)
                      }],
                      legend: {
                          align: 'center',
                          verticalAlign: 'top',
                          y: 25,
                          floating: true,
                          backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                          borderColor: '#CCC',
                          borderWidth: 1,
                          shadow: false
                      },
                      chart: {
                        spacingBottom: 15,
                        spacingTop: 10,
                        spacingLeft: 10,
                        spacingRight: 10,
                        height: 300
                      },
                      tooltip: {
                          shared: true,
                          headerFormat: '<b>{point.x}</b><br/>',
                          pointFormat: '{series.name}: {point.y}<br/>'
                        }
                });

  // interactivity for the buttons (this part is jquery)
  $('#line').click(function(){
    mychart.update({
      chart:{
        type:'line'
      }
      });
    });


  $('#column').click(function(){
    mychart.update({
      chart: {
          type: "column"
      },
      xAxis: {
          categories: years,
          crosshair: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0,
              stacking: false
          }
      }
    });
  });
};
