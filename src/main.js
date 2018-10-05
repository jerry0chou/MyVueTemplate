// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
// 自定义
import '@/assets/css/reset.css'
import '@/assets/css/global.css'
import components from '@/components'
// 第三方
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueProgressBar from 'vue-progressbar'
import vuePositionSticky from 'vue-position-sticky'

Vue.config.productionTip = false


// 第三方
Vue.use(ElementUI, { size: 'small' })
Vue.use(VueProgressBar)
Vue.use(vuePositionSticky)


// 自定义
Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
