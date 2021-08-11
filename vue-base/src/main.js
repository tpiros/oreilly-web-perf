import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import router from './router';

import '@/assets/css/app.css';

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
