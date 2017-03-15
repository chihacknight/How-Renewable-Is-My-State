<script>
  /* globals ENVIRONMENT,PORT */
  import navHeader from 'components/nav-header'
  import siteFooter from 'components/site-footer'

  export default {
    components: {navHeader, siteFooter}
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
    <router-view></router-view>
    <siteFooter></siteFooter>
  </div>
</template>
