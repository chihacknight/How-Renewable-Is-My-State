<script>
  /* globals ENVIRONMENT,PORT */
  import navHeader from 'components/nav-header'
  import siteFooter from 'components/site-footer'

  export default {
    components: {navHeader, siteFooter}
  }
</script>

<style lang='sass-loader'>
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    display: flex;
  }
  .router-view {
    flex: 1;
  }
</style>

<template>
  <div id='app'>
    <navHeader></navHeader>
    <router-view class='router-view'></router-view>
    <siteFooter></siteFooter>
  </div>
</template>
