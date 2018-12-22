import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: false,
  },
  mutations: {
    SET_LOGGED_STATUS(state, status) {
      const stat = state;
      stat.logged = status;
    },
  },
  actions: {
    setLogged(context) {
      context.commit('SET_LOGGED_STATUS', true);
    },
  },
});
