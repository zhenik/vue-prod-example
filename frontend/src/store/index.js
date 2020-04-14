import Vue from 'vue'
import Vuex from 'vuex'
import shared from './shared'
import user from './user'
import auth from './auth'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user: user,
    shared: shared,
    auth: auth
  }
});
