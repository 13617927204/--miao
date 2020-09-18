import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from '../http'
// import { InfiniteScroll } from 'mint-ui'
// 将http里面封装的方法挂载到vue的原型上
Vue.prototype.$http = http

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(ElementUI)
// Vue.use(InfiniteScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#box')
