<script>
  /* globals ENVIRONMENT,PORT */
  import navHeader from 'components/nav-header'
  import mapWrapper from 'components/map-wrapper'
  import sidePanel from 'components/side-panel'

  export default {
    data: function () {
      return {
        image: require('src/logo.png'),
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
      }
    },
    components: {navHeader, mapWrapper, sidePanel}
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
      <sidePanel></sidePanel>
    </div>
  </div>
</template>
