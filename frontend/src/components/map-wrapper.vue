<script>
/*
  Props:
    - mapId: the id that should be assigned to the DOM element the map will mount to
  Private variables/references:
    - $map: a reference to the leaflet map component
*/
import L from 'leaflet'

export default {
  props: ['mapId'],
  mounted () {
    this.$map = L.map(this.mapId).setView(new L.LatLng(51.3, 0.7), 9)
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.$map)
  }
}
</script>

<style lang="scss">
  .leaflet-map-wrapper {
    height: 500px;
    width: 1000px;
  }
</style>

<template>
  <div class="leaflet-map-wrapper">
    <div :id="mapId"></div>
  </div>
</template>
