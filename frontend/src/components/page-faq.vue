<script>
  import faqItem from 'components/faq-item'
  import navHeader from 'components/nav-header'
  import siteFooter from 'components/site-footer'

  export default {
    data () {
      return {
        name: 'pageFAQ',
        qas: [
          {
            question: 'What is Lorem Ipsum?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            question: 'Where does it come from?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }
    },
    components: {faqItem}
  }
</script>

<style lang='sass-loader'>
  $primary-color: #6C9B34;
  .faq {
    max-width: 960px;
    width: 100%;
    min-width: 320px;
  }
</style>

<template>
  <div class='faq'>
    <faqItem
      v-for="qa in qas"
      :question='qa.question'
      :answer='qa.answer'
      >
    </faqItem>
  </div>
</template>
