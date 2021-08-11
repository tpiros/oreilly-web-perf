import Vue from 'vue';
import Router from 'vue-router'

// import Main from '@/components/Main.vue';
// import Article from '@/components/Article.vue';
// import About from '@/components/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'main',
    // component: Main,
    component: () => import(/* webpackChunkName: "main" */ '@/components/Main.vue')
  }, {
    path: '/about',
    name: 'about',
    // component: About
    component: () => import(/* webpackChunkName: "about" */ '@/components/About.vue')
  }, {
    path: '/article',
    name: 'article',
    // component: Article
    component: () => import(/* webpackChunkName: "article" */ '@/components/Article.vue')
  }]
});
