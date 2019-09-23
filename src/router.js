import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// import Home from './views/Home.vue';
const Home = () => import('./views/Home.vue');
const NotFound = { template: '<p>Page not found</p>' };
const About = { template: '<p>About</p>' };

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});
