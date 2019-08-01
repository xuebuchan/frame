import Vue from 'vue'
console.log(Vue.options)
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible"
import './assets/css/reset.css'
Vue.config.productionTip = false
Vue.mixin({
  created: function () {
    console.log(333)
    }
 })
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
