import Button from './Button';
import Box from './Box';

const components = [
  Button,
  Box
]

const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;
  components.map(component => {
    Vue.use(component.name, component);
  })
  //检测到Vue 才执行
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
}



//全量导出
export default {
  install,
  ...components
}

