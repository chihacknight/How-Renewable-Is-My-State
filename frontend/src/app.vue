<script>
  /* globals ENVIRONMENT,PORT */
  import mapWrapper from 'components/map-wrapper'
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
    components: {
      mapWrapper
    }
  }
</script>

<style lang="sass-loader">
  h1 {
    img {
      height: 50px;
    }
  }
</style>

<template>
  <div id="app">
    <div class="content">
      <h1><img :src="image" />{{title}}</h1>
      <div v-on:click="updateMessage(message)">{{message}}</div>
      <div>Environment: {{environment}}</div>
      <div>Port: {{port}}</div>
    </div>
    <mapWrapper mapId="map"></mapWrapper>
  </div>
</template>
