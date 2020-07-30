import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    repositories: [],
    username: "",
  },
  mutations: {
    listRepositoriesByUsername(state, listUserRepos) {
      state.repositories = listUserRepos;
    },
    updateUsername(state, username) {
      state.username = username;
    },
  },
  actions: {
    //Actions realizam chamadas a assíncronas e lógicas mais avançadas
    listRepositoriesByUsername({ commit }) {
      if (store.state.username != "") {
        api.get(`users/${store.state.username}/repos`).then((response) => {
          commit("listRepositoriesByUsername", response.data);
        });
      }
    },
    updateUsername({ commit }, username) {
      commit("updateUsername", username);
    },
  },
});

export { store };
