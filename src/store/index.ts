import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 1
  },
  mutations: {
    add(state) {
      state.num++
    },
    minus(state) {
      state.num--
    }
  },
  actions: {
    add({ commit }) {
      commit('add')
    },
    minus({ commit }) {
      commit('minus')
    }
  },
  modules: {}
})
