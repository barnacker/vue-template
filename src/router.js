import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import login from './views/Login.vue';
import signup from './views/Signup.vue';
import boards from './views/Boards.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
    },
    {
      path: '/boards',
      name: 'boards',
      component: boards,
    },
  ],
});
