import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "./config";
import {store} from '../store/index'

export const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
    // Vue.axios.defaults.headers.common["Token"]= store.getters['authToken']

    Vue.axios.interceptors.request.use(
        (config) => {
          let token = store.getters["authToken"]
          if (token) {
            config.headers['Token'] = `${ token }`;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error)
        }
    )
    console.log("API_URL", API_URL)
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};
// default api
export default ApiService;

export const UserService = {
  getRandomUser() {
    return ApiService.query("users");
  },
};
