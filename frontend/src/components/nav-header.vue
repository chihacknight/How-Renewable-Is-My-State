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
  @import '../style.scss';
  nav {
    height: $header-height;
    max-width: 960px;
    width: 100%;
    min-width: 320px;
    display: flex;
    justify-content: space-between;
    .sitename {
      font-size: 40px;
      line-height: $header-height;
      a {
        color: black;
        text-decoration: none;
      }
    }
    .nav-options {
      padding: 0;
      margin: 0;
      .nav-option{
        padding: 0 10px;
        font-size: 24px;
        line-height: $header-height;
        a {
          color: black;
          text-decoration: none;
        }
        &:hover {
          background-color: $primary-color;
          text-decoration: underline;
        }
      }
    }
  }
</style>

<template>
  <nav>
    <h1 class='sitename'>
      <router-link :to="{name:'home'}">{{ sitename }}</router-link>
    </h1>
    <div class ='nav-options'>
      <span class='nav-option'>
        <router-link :to="{name:'about'}">About</router-link>
      </span>
    </div>
  </nav>
</template>
