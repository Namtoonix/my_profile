import { createStore } from "vuex";

export default createStore({
  state: {
    color: "#00A3E1",
  },
  getters: {
    backgroundColor(state) {
      return `${state.color}80`;
    },
  },
  mutations: {
    UPDATE_COLOR(state, payload) {
      state.color = payload;
    },
  },
  actions: {
    selectColor(context, payload) {
      context.commit("UPDATE_COLOR", payload);
    },
  },
  modules: {},
});
