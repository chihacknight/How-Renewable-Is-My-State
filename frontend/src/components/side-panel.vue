<script>
import { mockData } from '../mock-data/data'
import infoRow from './side-panel-info-row'
import coalIcon from '../icons/hrims_icons_coal.png'
import gasIcon from '../icons/hrims_icons_gas.png'
import hydroIcon from '../icons/hrims_icons_hydro.png'
import windIcon from '../icons/hrims_icons_wind.png'
import solarIcon from '../icons/hrims_icons_solar.png'

export default {
  data () {
    return {
      name: 'sidePanel',
      mockData,
      coalIcon,
      gasIcon,
      hydroIcon,
      windIcon,
      solarIcon,
    }
  },
  components: {infoRow}
}
</script>

<style lang="sass-loader">
  #side-panel-wrapper{
    border: 1px solid black;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
  }

</style>

<template>
  <div id='side-panel-wrapper'>
    <h1>Side Panel</h1>
    <infoRow :stat-icon="coalIcon" :stat-text='mockData[1].data'></infoRow>
    <infoRow :stat-icon="gasIcon" :stat-text='mockData[2].data'></infoRow>
    <infoRow :stat-icon="hydroIcon" :stat-text='mockData[3].data'></infoRow>
    <infoRow :stat-icon="windIcon" :stat-text='mockData[4].data'></infoRow>
    <infoRow :stat-icon="solarIcon" :stat-text='mockData[5].data'></infoRow>
  </div>
</template>
