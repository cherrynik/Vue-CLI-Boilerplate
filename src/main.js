// window.Vue = require('vue')
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import './assets/styles/main.sass'

// Vue components (for use in html)

Vue.component('example', {
  template: require('./App.vue')
})

// Vue init

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')