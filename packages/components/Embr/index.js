import Embr from './src/main.vue'

Embr.install = function (Vue) {
  Vue.component(Embr.name, Embr);
}

export default Embr;