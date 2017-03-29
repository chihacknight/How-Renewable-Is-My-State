<script>
import { mockData } from '../mock-data/data'
import infoRow from './side-panel-info-row'
import coalIcon from '../icons/hrims_icons_coal.png'
import gasIcon from '../icons/hrims_icons_gas.png'
import hydroIcon from '../icons/hrims_icons_hydro.png'

export default {
  data () {
    return {
      name: 'sidePanel',
      mockData,
      coalIcon,
      gasIcon,
      hydroIcon,
    }
  },
  methods: {
    stateCodeToName: function (stateCode) {
      var stateName=''
      switch(stateCode) {
        case "AL":
            stateName='Alabama'
            break;
        case "AK":
            stateName='Alaska'
            break;
        case "AL":
            stateName='Arizona'
            break;
        case "AZ":
            stateName='Arkansas'
            break;
        case "AR":
            stateName='California'
            break;
        case "CA":
            stateName='Colorado'
            break;
        case "CO":
            stateName='Connecticut'
            break;
        case "CT":
            stateName='Delaware'
            break;
        case "DC":
            stateName='Dist. of Columbia'
            break;
        case "FL":
            stateName='Florida'
            break;
        case "GA":
            stateName='Georgia'
            break;
        case "HI":
            stateName='Hawaii'
            break;
        case "ID":
            stateName='Idaho'
            break;
        case "IL":
            stateName='Illinois'
            break;
        case "IN":
            stateName='Indiana'
            break;
        case "IA":
            stateName='Iowa'
            break;
        case "KS":
            stateName='Kansas'
            break;
        case "KY":
            stateName='Kentucky'
            break;
        case "LA":
            stateName='Louisiana'
            break;
        case "ME":
            stateName='Maine'
            break;
        case "MD":
            stateName='Maryland'
            break;
        case "MA":
            stateName='Massachusetts'
            break;
        case "MI":
            stateName='Michigan'
            break;
        case "MN":
            stateName='Minnesota'
            break;
        case "MS":
            stateName='Mississippi'
            break;
        case "MO":
            stateName='Missouri'
            break;
        case "MT":
            stateName='Montana'
            break;
        case "NE":
            stateName='Nebraska'
            break;
        case "NV":
            stateName='Nevada'
            break;
        case "NH":
            stateName='New Hampshire'
            break;
        case "NJ":
            stateName='New Jersey'
            break;
        case "NM":
            stateName='New Mexico'
            break;
        case "NY":
            stateName='New York'
            break;
        case "NC":
            stateName='North Carolina'
            break;
        case "ND":
            stateName='North Dakota'
            break;
        case "OH":
            stateName='Ohio'
            break;
        case "OK":
            stateName='Oklahoma'
            break;
        case "OR":
            stateName='Oregon'
            break;
        case "PA":
            stateName='Pennsylvania'
            break;
        case "RI":
            stateName='Rhode Island'
            break;
        case "SC":
            stateName='South Carolina'
            break;
        case "SD":
            stateName='South Dakota'
            break;
        case "TN":
            stateName='Tennessee'
            break;
        case "TX":
            stateName='Texas'
            break;
        case "UT":
            stateName='Utah'
            break;
        case "VT":
            stateName='Vermont'
            break;
        case "WA":
            stateName='Washington'
            break;
        case "WV":
            stateName='West Virginia'
            break;
        case "WI":
            stateName='Wisconsin'
            break;
        case "WY":
            stateName='Wyoming'
            break;
        default:
            stateName = 'State code not found'
      }
      return stateName
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
    #side-panel-title-wrapper {
      display: inherit;
      justify-content: space-between;
    }
    .flex-one {
      flex: 1;
    }
  }

</style>

<template>
  <div id='side-panel-wrapper'>
    <div id='side-panel-title-wrapper'>
      <h1 class='flex-one'>{{stateCodeToName(mockData[1].statecode)}}</h1>
      <h1>1st of 51</h1>
    </div>
    <div id='side-panel-title-wrapper'>
      <h1 class='flex-one'>Total Energy Consumption</h1>
      <h1>by MMBtu</h1>
    </div>
    <infoRow :stat-icon="coalIcon" :stat-name='"Renewable"' :stat-value='mockData[1].data'></infoRow>
    <infoRow :stat-icon="gasIcon" :stat-name='"Fossil Fuel"' :stat-value='mockData[2].data'></infoRow>
    <infoRow :stat-icon="hydroIcon" :stat-name='"Nuclear"' :stat-value='mockData[3].data'></infoRow>
  </div>
</template>
