import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import BamtleUI from './../packages/components'

Vue.use(BamtleUI)

new Vue({
  render: h=> h(App)
}).$mount('#app')