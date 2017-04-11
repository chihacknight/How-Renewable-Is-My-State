<script>
  export default {
    props: [
      'question',
      'answer'
    ]
  }
</script>

<style lang='sass-loader'>
  @import '../global-vars.scss';
  .faq-item {
    width: 100%;
  }
  .faq-item-question {
    color: $primary-color
  }
  .faq-item-answer {
    text-indent: 20px;
  }
</style>

<template>
  <div class='faq-item'>
    <h2 class='faq-item-question'>{{question}}</h2>
    <p class='faq-item-answer'>{{answer}}</p>
  </div>
</template>
