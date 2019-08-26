import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
  	console.log(to, from, savedPosition)
    if (savedPosition) {  
          return savedPosition    
    } else {      
          if (from.meta.keepAlive) {     
          	console.log(from,"from")
               from.meta.savedPosition = document.body.scrollTop;      
          }        
          return { x: 0, y: to.meta.savedPosition || 0 }    
    }  
},
  routes: [
    {
      path: '/',
      name: 'about',
     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/loading',
      name: 'loading',
      component: ()=>import('./views/vant/loading.vue')
    },
    {
      path: '/toast',
      name: 'toast',
      component: ()=>import('./views/vant/toast.vue')
    },
    {
      path: '/func',
      name: 'func',
      component: ()=>import('./views/vant/func.vue')
    },
    {
      path: '/comp/:name',
      name: 'comp',
      component: ()=>import('./views/vant/comp.vue')
    },
    {
      path: '/directive',
      name: 'directive',
      component: ()=>import('./views/vant/vue/directive.vue')
    },
    {
      path: '/render',
      name: 'render',
      component: ()=>import('./views/vant/vue/render.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: ()=>import('./views/vant/vue/computed.vue')
    },
    {
      path: '/compModel',
      name: 'compModel',
      component: ()=>import('./views/vant/vue/demo.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: ()=>import('./views/vant/vue/list.vue'),
      meta:{
      	 isUseCache: false,  // 这个字段的意思稍后再说      
        keepAlive: true  // 通过此字段判断是否需要缓存当前组件  
      }
    },
     {
      path: '/detail',
      name: 'detail',
      component: ()=>import('./views/vant/vue/detail.vue'),
      
    },
  ]
})
