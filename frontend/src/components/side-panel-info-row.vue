<script>
  export default {
    props: [
      'statIcon',
      'statText'
    ]
  }
</script>

<style lang='sass-loader'>
  $primary-color: #6C9B34;
  $row-height: 75px;
  .info-row {
    display: flex;
    flex-direction: row nowrap;
    width: 100%;
    height: $row-height;
    .stat-icon {
      height: $row-height;
    }
    .stat-text {
      padding-left: 10px;
      align-self: center;
      font-size: 28px;
    }
  }
</style>

<template>
  <div class='info-row'>
    <img class='stat-icon' :src="statIcon" />
    <div class='stat-text'>{{statText}}</div>
  </div>
</template>
