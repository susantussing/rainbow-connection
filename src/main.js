import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import tinycolor from 'tinycolor2'
import axios from 'axios'

Vue.use(Vuex)

new Vue({
  el: '#app',
  render: h => h(App)
})

