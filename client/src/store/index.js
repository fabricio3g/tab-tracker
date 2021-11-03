import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    toke: null,
    user: null,
    isUserLogIn: false
  },
  mutations: {
    setToken (state, token) {
      state.toke = token
      state.isUserLogIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    }
  },
  modules: {
  }
})
