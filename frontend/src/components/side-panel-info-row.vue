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
    .stat-name {
      padding-left: 10px;
      align-self: center;
      font-size: 28px;
      flex: 1;
    }
    .stat-value {
      padding-left: 10px;
      align-self: center;
      font-size: 28px;
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
