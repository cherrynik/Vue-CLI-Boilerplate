import Vue from 'vue';
import router from './router';
import App from './App.vue';

import '@styles/main.scss';

new Vue({
  router,
  module,
  el: '#app',
  render: (h) => h(App),
}).$mount('#app');
