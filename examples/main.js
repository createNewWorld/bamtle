import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import Button from './../packages/components/Button'
import Embr from './../packages/components/Embr'

Vue.use(Button)
Vue.use(Embr)

new Vue({
  render: h=> h(App)
}).$mount('#app')