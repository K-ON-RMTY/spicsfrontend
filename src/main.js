// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import less from 'less'
import '@/assets/styles/reset.css'
import '@/assets/styles/all.css'
import '@/assets/styles/iconfont.css'
Vue.config.productionTip = false
Vue.use(less)
// 设置后端地址
Vue.prototype.$remote = "http://qom3or861.hn-bkt.clouddn.com/"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
