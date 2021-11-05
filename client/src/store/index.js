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
      if (token) {
        state.isUserLogIn = true
      } else {
        state.isUserLogIn = false
      }
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
