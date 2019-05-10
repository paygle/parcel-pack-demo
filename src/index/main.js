import './main.scss'
import 'babel-polyfill'
import Vue from 'vue'
import App from '../app'
import router from '../router'
import store from '../store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
