<script>
  /* globals ENVIRONMENT,PORT */
  import mapWrapper from 'components/map-wrapper'
  import sidePanel from 'components/side-panel'
  import axios from 'axios'


  export default {
  // Fetches posts when the component is created.
  created() {
  axios.all([
        axios.get(API_HOSTNAME + '/api/data', {
        params: {
          year: 2014
        }
        }),
        axios.get(API_HOSTNAME + '/api/mapdata', {
        params: {
          year: 2014
        }
        }),
        axios.get(API_HOSTNAME + '/api/info')

    ])
    .then(axios.spread(function (dataResponse, mapDataResponse, infoResponse) {
      //... but this callback will be executed only when both requests are complete.
      console.log('Data', dataResponse.data);
      console.log('MapData', mapDataResponse.data);
      console.log('DataInfo', infoResponse.data);
    }));
  }
    ,
    components: {mapWrapper, sidePanel}
  }
</script>

<style lang='sass-loader'>
  @import '../global-vars.scss';
  #vis-component-container {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-flow: row nowrap;
  }
  #timeline-placeholder {
    height: 200px;
    border: 1px solid black;
  }
</style>

<template>
  <div>
    <div id='vis-component-container'>
      <mapWrapper mapId='map'></mapWrapper>
      <sidePanel></sidePanel>
    </div>
    <div id='timeline-placeholder'>
    </div>
  </div>
</template>
