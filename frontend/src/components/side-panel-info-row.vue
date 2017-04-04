<script>
  export default {
    props: [
      'statIcon',
      'statName',
      'statValue'
    ]
  }
</script>

<style lang='sass-loader'>
  @import '../global-vars.scss';
  $row-height: 70px;
  .info-row {
    display: flex;
    flex-direction: row nowrap;
    width: 100%;
    height: $row-height;
    .stat-icon {
      height: $row-height;
    }
    .stat-name {
      flex: 1;
    }
    .stat-value, .stat-name {
      padding-left: 10px;
      align-self: center;
      font-size: 20px;
    }
  }
</style>

<template>
  <div class='info-row'>
    <img class='stat-icon' :src="statIcon" />
    <div class='stat-name'>{{statName}}: </div>
    <div class='stat-value'>{{statValue / 10000}}%</div>
  </div>
</template>
