import Box from './src/main.vue'

Box.install = function (Vue) {
  Vue.component(Box.name, Box);
}

export default Box;