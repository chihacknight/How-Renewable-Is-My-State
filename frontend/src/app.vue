<script>
  /* globals ENVIRONMENT,PORT */
  import navHeader from 'components/nav-header'
  import mapWrapper from 'components/map-wrapper'
  import sidePanel from 'components/side-panel'
  import chart from 'components/chart'

  export default {
    data: function () {
      return {

        title: 'ery Renewable State',
        message: 'Nice job! Youve made it!',
        environment: ENVIRONMENT,
        port: PORT
      }
    },
    methods: {
      updateMessage: function (message) {
        let newMessage = message + ' Now go build something!'
        this.message = newMessage
    },
      fetchData: function(request) {
          fetch('http://localhost:8000/api/data/') // Call the fetch function passing the url of the API as a parameter
          .then((response) => response.json())
          .then(function(data) {
              let values = data.results;
              console.log(values);
          });

      }

    },
    components: {navHeader, mapWrapper, sidePanel, chart}
  }

</script>

<style lang='sass-loader'>
  #vis-component-container {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    sidePanel {
      flex: 1;
    }
  }
</style>

<template>
  <div id='app'>
    <navHeader></navHeader>
    <div id='vis-component-container'>
      <mapWrapper mapId='map'></mapWrapper>
      <chart></chart>
      <sidePanel></sidePanel>

    </div>
  </div>
</template>
