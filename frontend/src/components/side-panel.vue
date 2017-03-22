<script>
import { mockData } from '../mock-data/data'
export default {
  data () {
    return {
      name: 'sidePanel',
      mockData
    }
  }
}
</script>

<style lang="sass-loader">
  #side-panel-wrapper{
    border: 1px solid black;
    flex: 1;
  }

</style>

<template>
  <div id='side-panel-wrapper'>
    <h1>Side Panel</h1>
    {{mockData}}

  </div>
</template>
