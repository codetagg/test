require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';
import Axios from 'axios'
import router from './Router/index'
import store from './Store/index';
import App from './App.vue'

Vue.use(VueRouter)


Vue.prototype.$http = Axios

const token = localStorage.getItem('token')

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App }
});