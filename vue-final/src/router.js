import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '@/components/Main.vue')
  }, {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/components/About.vue')
  }, {
    path: '/article',
    name: 'article',
    component: () => import(/* webpackChunkName: "article" */ '@/components/Article.vue')
  }]
});
