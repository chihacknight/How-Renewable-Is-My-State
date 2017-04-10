<script>

//import Highcharts from 'highcharts'
import Highcharts from 'highcharts/highmaps'
import jquery from 'jquery'

export default {
    data () {
      return {
         data: [
    ['DE.SH', 728],
    ['DE.BE', 710],
    ['DE.MV', 963],
    ['DE.HB', 541],
    ['DE.HH', 622],
    ['DE.RP', 866],
    ['DE.SL', 398],
    ['DE.BY', 785],
    ['DE.SN', 223],
    ['DE.ST', 605],
    ['DE.NW', 237],
    ['DE.BW', 157],
    ['DE.HE', 134],
    ['DE.NI', 136],
    ['DE.TH', 704],
    ['DE.', 361]
]
      }
  },
  props: ['mapId', 'data'],
  mounted () {
      var data = [
    ['DE.SH', 728],
    ['DE.BE', 710],
    ['DE.MV', 963],
    ['DE.HB', 541],
    ['DE.HH', 622],
    ['DE.RP', 866],
    ['DE.SL', 398],
    ['DE.BY', 785],
    ['DE.SN', 223],
    ['DE.ST', 605],
    ['DE.NW', 237],
    ['DE.BW', 157],
    ['DE.HE', 134],
    ['DE.NI', 136],
    ['DE.TH', 704],
    ['DE.', 361]
];
      this.$map = jquery.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=germany.geo.json&callback=?', function (geojson) {

          // Initiate the chart
          Highcharts.mapChart(mapId, {

              title: {
                  text: 'GeoJSON in Highmaps'
              },

              mapNavigation: {
                  enabled: true,
                  buttonOptions: {
                      verticalAlign: 'bottom'
                  }
              },

              colorAxis: {
                  tickPixelInterval: 100
              },

              series: [{
                  data: data,
                  mapData: geojson,
                  joinBy: ['code_hasc', 0],
                  keys: ['code_hasc', 'value'],
                  name: 'Random data',
                  states: {
                      hover: {
                          color: '#a4edba'
                      }
                  },
                  dataLabels: {
                      enabled: true,
                      format: '{point.properties.postal}'
                  }
              }]
          });
      });
  }
}

</script>

<style lang="scss">
</style>

<template>
<!--<div class="Map" style="border: 1px solid black; width: 700px; float: left"></div>-->
  <!-- <div :id="mapId" class="leaflet-map-wrapper"></div> -->
<div id="mapId" style="width:300px%; height:400px;" class="d3-map">
</div>


</template>
