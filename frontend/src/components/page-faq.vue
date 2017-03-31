<script>
  import faqItem from 'components/faq-item'
  import navHeader from 'components/nav-header'
  import siteFooter from 'components/site-footer'

  export default {
    data () {
      return {
        name: 'pageFAQ',
      }
    },
    components: {faqItem}
  }
</script>

<style lang='sass-loader'>
  @import '../style.scss';
  .faq {
    max-width: 960px;
    width: 100%;
    min-width: 320px;
  }
</style>

<template>
  <div class='faq'>
    <h1>About</h1>
    <p>To see how this site was built, check out the <a href='https://github.com/chihacknight/How-Renewable-Is-My-State'>Github Repo</a>.</p>
    <p>This visualization uses energy consumption data from the <a href='https://www.eia.gov/state/seds/'>State Energy Data System (SEDS)</a> pages of the <a href='https://www.eia.gov/'>US Energy Information Administration’s (EIA)</a> website. All of the energy values contained in this visualization represent energy consumed in billions of BTU. A more detailed overview of how we arrived at these values is outlined below.</p>
    <h2>Methodology</h2>
    <p>All of the energy consumption categories contained in this visualization rely on the definitions used by the EIA:</p>
    <ul>
      <li>Total Energy Consumption</li>
      <li>Fossil Fuels - fossil fuels total consumption</li>
      <ul>
        <li>Coal - coal total consumption</li>
        <li>Natural Gas - natural gas total consumption (excluding supplemental gaseous fuels)</li>
        <li>Petroleum - all petroleum products total consumption excluding fuel ethanol</li>
      </ul>
      <li>Nuclear - nuclear energy consumed for electricity generation, total</li>
      <li>Renewable Energy - renewable energy total consumption</li>
      <ul>
        <li>Fuel Ethanol - fuel ethanol, excluding denaturant, total consumption</li>
        <li>Geothermal - geothermal energy, total consumed</li>
        <li>Hydropower - hydropower, total consumed</li>
        <li>Solar - photovoltaic and solar thermal energy, total consumed</li>
        <li>Wood and Waste - wood and waste total consumed</li>
        <li>Wind - wind energy, total consumed</li>
      </ul>
      <li>Interstate Imports/Exports - net interstate flow of electricity and associated losses (negative and positive values).</li>
    </ul>

    <h2 id='License'>License</h2>
    <p>Copyright &copy; 2017 How Renewable is my State</p>

<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
    <!-- <faqItem
      v-for="qa in qas"
      :question='qa.question'
      :answer='qa.answer'
      >
    </faqItem> -->
  </div>
</template>
