import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import Button from './../packages/components/Button'
import Box from './../packages/components/Box'

Vue.use(Button)
Vue.use(Box)

new Vue({
  render: h=> h(App)
}).$mount('#app')