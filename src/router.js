import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
  ]
})
