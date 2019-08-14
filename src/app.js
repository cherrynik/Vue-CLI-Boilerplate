import './assets/styles/main.sass'

window.Vue = require('vue')
import Vue from 'vue'
import App from './App.vue'

// Vue components (for use in html)
Vue.component('example-component', {
  template: require('./app.vue')
})

// Vue init
 new Vue({
  el: '#app',
  render: h => h(App)
})