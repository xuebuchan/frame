import Vue from 'vue'
console.log(Vue.options)
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible"
import './assets/css/reset.css'
Vue.config.productionTip = false;
// import axios from 'axios'
// Vue.prototype.$axios = axios
import getInterfaceData from './assets/http.js'
Vue.use(getInterfaceData)
import VueI18n from 'vue-i18n'

Vue.use(VueI18n) // 通过插件的形式挂载
import zh from'./lang/zh'
import en from'./lang/en'
const i18n = new VueI18n({
    locale: 'en-US',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': zh,   // 中文语言包
        'en-US': en    // 英文语言包
    }
})


// Vue.use(VueI18n)
router.beforeEach((to, from, next) => {
	console.log("全局前置守卫");
	next()
  // ...
})
router.afterEach((to, from) => {
	console.log("全局后置守卫")
  // ...
})
Vue.mixin({
  created: function () {
//  console.log(333)
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
/*Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})*/

var getChildrenTextContent = function (children) {
	console.log(children,"children")
  return children.map(function (node) {
  	console.log(node,"node")
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}

Vue.component('anchored-heading', {
  render: function (createElement) {
  	console.log(this,"this")
  	console.log(this.$slots.default,"this.$slots.default")
    // 创建 kebab-case 风格的 ID
    var headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '')

    return createElement(
      'h' + this.level,
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId
          }
        }, this.$slots.default)
      ]
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
//守卫
router.beforeEach((to, from, next) => {
	console.log("before")
  // console.log(to,from,next)
	next()
})
router.afterEach((to, from) => {
  console.log("after")
	// console.log(to,from);
	// next()
})
new Vue({
  router,
  store,
    i18n,
  render: h => h(App)
}).$mount('#app')
console.log(i18n,"vue")
console.log(this)
