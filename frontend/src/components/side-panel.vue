<script>
import drilldown from 'highcharts/modules/drilldown.js'
import Highcharts from 'highcharts'

import jquery from 'jquery'

export default {
    data () {
      return {}
  },
  props: ['mapId', 'sidepaneldata'],
  mounted () {
      var options = {

      chart: {
          height: 300
      },

      title: {
          text: 'Highcharts Drilldown Plugin'
      },

      xAxis: {
          categories: true
      },

      drilldown: {
          series: [{
              id: 'fruits',
              name: 'Fruits',
              data: [
                  ['Apples', 4],
                  ['Pears', 6],
                  ['Oranges', 2],
                  ['Grapes', 8]
              ]
          }, {
              id: 'cars',
              name: 'Cars',
              data: [{
                  name: 'Toyota',
                  y: 4,
                  drilldown: 'toyota'
              },
              ['Volkswagen', 3],
              ['Opel', 5]
              ]
          }, {
              id: 'toyota',
              name: 'Toyota',
              data: [
                  ['RAV4', 3],
                  ['Corolla', 1],
                  ['Carina', 4],
                  ['Land Cruiser', 5]
              ]
          }]
      },

      legend: {
          enabled: false
      },

      plotOptions: {
          series: {
              dataLabels: {
                  enabled: true
              },
              shadow: false
          },
          pie: {
              size: '80%'
          }
      },

      series: [{
          name: 'Overview',
          colorByPoint: true,
          data: [{
              name: 'Fruits',
              y: 10,
              drilldown: 'fruits'
          }, {
              name: 'Cars',
              y: 12,
              drilldown: 'cars'
          }, {
              name: 'Countries',
              y: 8
          }]
      }]
  };
  options.chart.renderTo = 'container';
  options.chart.type = 'column';
  var chart1 = new Highcharts.Chart(options);

  }
}

</script>

<style lang="scss">
</style>

<template>
<div>
<!--<div class="Map" style="border: 1px solid black; width: 700px; float: left"></div>-->
<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
<div> <p> {{ sidepaneldata }} </p>
</div>
</div>

</template>
