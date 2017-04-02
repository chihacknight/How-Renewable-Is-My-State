/*
ethanol_prod_loss_energy_consumption is not included in display cuz of the length of the name
can include it tho
*/

function drawSidePanel(energy_data, selectedState, selectedYear, states){
  // categorize all data
  selectedYear = String(selectedYear);
  var total_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "TETCB" && d.year==selectedYear;});

  var renew_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "RETCB" && d.year==selectedYear;});
  var ethanol_prod_loss_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "EMLCB" && d.year==selectedYear;});
  var ethanol_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "EMTCB" && d.year==selectedYear;});
  var geothermal_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "GETCB" && d.year==selectedYear;});
  var hydrop_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "HYTCB" && d.year==selectedYear;});
  var solar_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "SOTCB" && d.year==selectedYear;});
  var woodwaste_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "WWTCB" && d.year==selectedYear;});
  var wind_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "WYTCB" && d.year==selectedYear;});

  var nuc_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "NUETB" && d.year==selectedYear;});

  var fosil_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "FFTCB" && d.year==selectedYear;});
  var coal_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "CLTCB" && d.year==selectedYear;});
  var natural_gas_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "NNTCB" && d.year==selectedYear;});
  var petroleum_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "PMTCB" && d.year==selectedYear;});

  var int_import_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "ELNIB" && d.year==selectedYear;});
  var int_state_energy_consumption = energy_data.filter(function(d){return d.statecode ==selectedState && d.msn == "ELISB" && d.year==selectedYear;});

  Highcharts.chart("SidePanel", {
    title: {
      text: selectedState + ' Energy Consumption in ' + selectedYear + ' Breakdown'
    },
    lang:{
      drillUpText: "◁- Back"
    },
    subtitle: {
      text: "(Billion Btu)",
      align: "left"
    },
    chart: {
      type: "column"
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      title: {
        text: "Energy Consumption Amount"
      }
    },
    legend: {
        enabled: true
    },
    tooltip :{
      enabled: false
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
            },
          stacking: 'normal'
          }
    },
   series: [
     {
       name: 'Nuclear',
       data: [{
         name: 'Total Energy Consumption',
         y: nuc_energy_consumption[0].data,
         drilldown: 'Total Energy Consumption Breakdown'
       }]
     },
     {
       name: 'Fosil Fuel',
       data: [{
         name: 'Total Energy Consumption',
         y: fosil_energy_consumption[0].data,
         drilldown: 'Total Energy Consumption Breakdown'
       }]
     },
     {
       name: 'Renewable',
       data: [{
         name: 'Total Energy Consumption',
         y: renew_energy_consumption[0].data,
         drilldown: 'Total Energy Consumption Breakdown'
       }]
     }],
    drilldown: {
      drillUpButton: {
                  relativeTo: 'spacingBox',
                  position: {
                      y: 20,
                      x: 0
                  },
                  theme: {
                      fill: 'none',
                      stroke: 'none',
                      r: 0,
                      states: {
                          hover: {
                              fill: 'none'
                          }
                      }
                  }
              },
    series: [{
      name: 'Total Energy Consumption Breakdown',
      colorByPoint: true,
      id: 'Total Energy Consumption Breakdown',
        data: [
          ['Nuclear', nuc_energy_consumption[0].data], // keep it here so the color is right
        {
            name: 'Fosil Fuel',
            y: fosil_energy_consumption[0].data,
            drilldown: "Fosil Fuel Energy Consumption Breakdown"
        },{
            name: 'Renewable',
            y: renew_energy_consumption[0].data,
            drilldown: "Renewable Energy Consumption Breakdown"
        },
          ['International Imports', int_import_energy_consumption[0].data],
          ['Interstate Im-/Exports', int_state_energy_consumption[0].data]
        ]},
        { // breakdown data
          name: "Fosil Fuel Energy Consumption Breakdown",
          id: "Fosil Fuel Energy Consumption Breakdown",
          data:[
            ["Coal", fosil_energy_consumption[0].data],
            ['Natural Gas', natural_gas_energy_consumption[0].data],
            ['Petroleum Products', petroleum_energy_consumption[0].data]
          ]
        }, {
          name: "Renewable Energy Consumption Breakdown",
          id: "Renewable Energy Consumption Breakdown",
          data:[
            ['Fuel Ethanol (FE)', ethanol_energy_consumption[0].data],
            ['Geothermal', geothermal_energy_consumption[0].data],
            ['Hydropower', hydrop_energy_consumption[0].data],
            ['Solar', solar_energy_consumption[0].data],
            ['Wood & Waste', woodwaste_energy_consumption[0].data],
            ['Wind', wind_energy_consumption[0].data]
        ]}
      ]
   }
});
}
