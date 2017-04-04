<script>
  /* globals ENVIRONMENT,PORT */
  import mapWrapper from 'components/map-wrapper'
  import d3Map from 'components/d3-map'
  import sidePanel from 'components/side-panel'
  import chart from 'components/chart'

  export default {
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
    components: {d3Map, sidePanel}
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
  #timeline-placeholder {
    width: 100%;
    height: 200px;
    border: 1px solid black;
  }
</style>

<template>
  <div>
    <div id='vis-component-container'>
      <d3Map></d3Map>
      <sidePanel></sidePanel>
    </div>
    <div id='timeline-placeholder'>
    </div>
</div>
</template>
