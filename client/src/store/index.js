import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLogIn: false
  },
  plugins: [createPersistedState()],
  mutations: {
    setToken (state, token) {
      state.token = token
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
