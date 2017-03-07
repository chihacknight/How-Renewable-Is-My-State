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
  nav {
    height: 70px;
    max-width: 960px;
    width: 100%;
    min-width: 320px;
    display: flex;
    justify-content: space-between;
    .sitename {
      font-size: 40px;
      line-height: 70px;
    }
    .nav-options {
      padding: 0;
      margin: 0;
      .nav-option{
        padding: 0 10px;
        font-size: 24px;
        line-height: 70px;
        a {
          color: black;
          text-decoration: none;
        }
        &:hover {
          background-color: lightgray;
          text-decoration: underline;
        }
      }
    }
  }
</style>

<template>
  <nav>
    <h1 class='sitename'>{{ sitename }}</h1>
    <div class ='nav-options'>
      <span class='nav-option'><a href='#'>About</a></span>
      <span class='nav-option'><a href='#'>FAQ</a></span>
    </div>
  </nav>
</template>
