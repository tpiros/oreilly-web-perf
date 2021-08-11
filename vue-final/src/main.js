import Vue from 'vue'
import App from './App.vue'
import router from './router';

import './registerServiceWorker'

import attrchange from 'lazysizes/plugins/attrchange/ls.attrchange.min'
import lazysizes from 'lazysizes'

import '@/assets/css/app.css';

Vue.use(attrchange)
Vue.use(lazysizes)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
