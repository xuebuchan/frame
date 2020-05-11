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

import ViewUI from 'view-design';
console.log(ViewUI,"ViewUI")
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
import VueDND from 'awe-dnd'
Vue.use(VueDND)
// 富文本编辑器
import VueTinymce from "@packy-tang/vue-tinymce"

//安装组件
Vue.use(VueTinymce)

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
let files = require.context('./views/demo/vue', true, /\w*\.vue$/)
let slotchild=[]
files.keys().forEach(key => {
    console.log(files(key).default)
    // slotchild.push(import(`../vue/${files(key).default}`))
})
Vue.component('render-fun', {
    functional: true,
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data(){return {}},
    render: function (createElement, context) {
        console.log(context,"context");
        console.log(context.props.id);
        console.log(context.children)
        return createElement("span",{
            props: {
                items:context.props.id,
                to:context.props.id
            },
            }, context.children)
    }
})

new Vue({
  router,
  store,
    i18n,
  render: h => h(App)
}).$mount('#app')
console.log(i18n,"vue")
console.log(123)
console.log("online")
console.log(666)
console.log(555)
console.log('kaishi')
