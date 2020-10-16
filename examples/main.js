import Vue from 'vue'
import App from './App.vue'
import bamtle from '../packages'

Vue.config.productionTip = false
Vue.use(bamtle)

new Vue({
  render: h => h(App),
}).$mount('#app')
