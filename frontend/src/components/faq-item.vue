<script>
  export default {
    props: [
      'question',
      'answer'
    ]
  }
</script>

<style lang='sass-loader'>
  $primary-color: #6C9B34;
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
