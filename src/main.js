import Vue from 'vue';
import router from './router';
import App from './App.vue';

import './assets/styles/main.sass';

new Vue({
  router,
  el: '#app',
  render: (h) => h(App),
}).$mount('#app');
