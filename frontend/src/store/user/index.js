const initialState = {
    currentUser: {
      id: '',
      name: '',
      lastname: '',
      age: 0
    }
};

export const state = { ...initialState };
export const actions = {
  resetCurrentUser({commit}){
    commit('setCurrentUser', initialState.currentUser);
  }
};
export const mutations = {
  setCurrentUser(state, payload) {
    state.currentUser = payload
  },
};
export const getters = {
    currentUser(state) {
      return state.currentUser;
    },
};

export default {
  state,
  getters,
  actions,
  mutations
};
