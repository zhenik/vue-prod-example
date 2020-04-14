import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app';
import 'firebase/auth';
import router from './router'
import { store } from './store';
import ApiService from "./api/index";

Vue.config.productionTip = false;

let config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};


ApiService.init();
firebase.initializeApp(config);

// firebase.onAuthStateChanged((u) => {
//   if (u == null) {
//    console.log("Auth changed, user NOT null", JSON.stringify(u))
//   }
//   else {
//     console.log("Auth changed, user NULL")
//   }
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
