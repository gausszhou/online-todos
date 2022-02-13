import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: false,
    todayTasks: [],
    todos: [],
    currentIndex: -1,
  },
  getters: {
    todayTasks: (state) => state.todayTasks,
  },
  mutations: {},
  actions: {},
  modules: {},
});
