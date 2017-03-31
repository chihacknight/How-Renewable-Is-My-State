import Vue from 'vue'
import app from 'src/app.vue'
import VueRouter from 'vue-router'
import pageHome from 'components/page-home'
import pageFAQ from 'components/page-faq'
import 'src/style'

const routes = [
  {path: '/', name: 'home', component: pageHome},
  {path: '/about', name: 'about', component: pageFAQ}
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

Vue.use(VueRouter)
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: (h) => h(app)
})
