import firebase from 'firebase/app';
import 'firebase/auth';

const initialState = {
  user: null
};

export const state = {...initialState};
export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
}

export const actions = {
  signUserIn({commit}, payload) {
    console.log("Enter sign in")
    commit('setLoading', true);
    commit('clearError');
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          const newUser = {
            id: response.user.uid,
            name: response.user.displayName,
            email: response.user.email,
            photoUrl: response.user.photoURL,
            token: response.user.getIdToken()
          };
          commit('setUser', newUser);
          return newUser.email;
        })
        .catch(error => {
          commit('setLoading', false);
          commit('setError', error);
          console.log(error)
        })
  },
  logout({commit}) {
    firebase.auth().signOut();
    commit('setUser', null);
    commit('setProfile', null);
  }
}
export const getters = {
  user(state) {
    return state.user
  },
  authenticated(state) {
    const authenticated = (state.user !== null && state.user !== undefined);
    const authorized = (state.profile !== null && state.profile !== undefined);
    return (authenticated && authorized);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
