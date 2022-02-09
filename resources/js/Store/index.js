import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  getters: {
  isLoggedIn: state => state.token,
  authStatus: state => state.status,
  },
  mutations: {
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, payload) {
    state.status = 'success'
    state.token = payload.token
    state.user = payload.user
  },
  auth_error(state) {
    state.status = 'error'
  },
  logout(state) {
    state.status = ''
    state.token = ''
  },
  },
  actions: {
 login({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({ url: 'http://127.0.0.1:8000/api/loginuser', data: user, method: 'POST' })
      .then(resp => {
        console.log(resp);
        const token = resp.data.id
        const user = resp.data

        localStorage.setItem('token', token)
        localStorage.setItem('user', user)
        axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', { token: token, user: user })
        resolve(resp)
      })
      .catch(err => {
        commit('auth_error')
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },
  },
  modules: {

  }
})
