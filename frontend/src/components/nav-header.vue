<script>
export default {
  data () {
    return {
      name: 'navHeader',
      sitename: 'How Renewable Is My State?'
    }
  }
}
</script>

<style lang="sass-loader">
  @import '../global-vars.scss';
  @import '../button.scss';
  nav {
    height: $header-height;
    width: 100%;
    min-width: $site-min-width;
    max-width: 960px;
    display: flex;
    justify-content: space-between;
    .sitename {
      font-size: 40px;
      line-height: $header-height;
      margin: 0;
      a {
        color: black;
        text-decoration: none;
      }
    }
    .nav-options {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
  }
</style>

<template>
  <nav>
    <h1 class='sitename'>
      <router-link :to="{name:'home'}">{{ sitename }}</router-link>
    </h1>
    <div class ='nav-options'>
        <router-link class='button' :to="{name:'about'}">About</router-link>
    </div>
  </nav>
</template>
