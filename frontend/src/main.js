import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ApiService from "./api/index";

import { store } from './store';
Vue.config.productionTip = false;
ApiService.init();
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
