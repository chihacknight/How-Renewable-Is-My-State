<script>
export default {
  data () {
    return {
      name: 'footer',
    }
  }
}
</script>

<style lang='sass-loader'>
  @import '../global-vars.scss';
  footer {
    height: $footer-height;
    min-width: $site-min-width;
    max-width: 960px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .footer-item {
      line-height: $footer-height;
    }
  }
</style>

<template>
  <footer>
    <span class='footer-item'>Copyright &copy; 2017 How Renewable is my State</span>
  </footer>
</template>
