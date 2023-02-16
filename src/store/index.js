import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '北京',
    cityId: 110100
  },
  mutations: {
    xuanzechengshi (state, data) {
      state.name = data.name;
      state.cityId = data.cityId;
    }
  },
  plugins: [createPersistedState()],
  actions: {},
  modules: {},
});
