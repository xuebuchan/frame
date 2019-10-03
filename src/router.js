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
      redirect: 'home',
     component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
		{
		  path: '/home',
		  name: 'home',
		 component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
		 children:[
			 {
			 				 path:'vant',
			 				 name:"vantList",
			 				 component:()=>import('./views/demo/vant/vantList.vue'),
			 },
			 {
				 path:'/',
				 name:"vueList",
				 component:()=>import('./views/demo/vue/vueList.vue'),
			 },
			 {
			 				 path:'vue',
			 				 name:"vueList",
			 				 component:()=>import('./views/demo/vue/vueList.vue'),
			 },
			 {
			 				 path:'ecma',
			 				 name:"ecmaList",
			 				 component:()=>import('./views/demo/es6/ecmaList.vue'),
			 },
			  {
			 				 path:'html',
			 				 name:"htmlList",
			 				 component:()=>import('./views/demo/html/htmlList.vue'),
			 },
			 {
			 				 path:'else',
			 				 name:"elseList",
			 				 component:()=>import('./views/demo/else/elseList.vue'),
			 },
			 {
			   path: 'loading',
			   name: 'loading',
			   component: ()=>import('./views/demo/vant/loading.vue')
			 },
			 {
			   path: 'toast',
			   name: 'toast',
			   component: ()=>import('./views/demo/vant/toast.vue')
			 },
			 {
			   path: 'dom',
			   name: 'dom',
			   component: ()=>import('./views/demo/html/dom.vue')
			 },
			 {
			   path: 'cssInherited',
			   name: 'cssInherited',
			   component: ()=>import('./views/demo/html/cssInherited.vue')
			 },
			 {
			   path: 'interface',
			   name: 'interface',
			   component: ()=>import('./views/demo/es6/interface.vue')
			 },
		 ]
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
      component: ()=>import('./views/demo/vant/loading.vue')
    },
    {
      path: '/toast',
      name: 'toast',
      component: ()=>import('./views/demo/vant/toast.vue')
    },
    {
      path: '/func',
      name: 'func',
      component: ()=>import('./views/demo/vant/func.vue')
    },
    {
      path: '/comp/:name',
      name: 'comp',
      component: ()=>import('./views/demo/vant/comp.vue')
    },
    {
      path: '/directive',
      name: 'directive',
      component: ()=>import('./views/demo/vue/directive.vue')
    },
		{
		  path: '/store',
		  name: 'store',
		  component: ()=>import('./views/demo/vue/store.vue')
		},
		
    {
      path: '/render',
      name: 'render',
      component: ()=>import('./views/demo/vue/render.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: ()=>import('./views/demo/vue/computed.vue')
    },
		 {
		  path: '/component',
		  name: 'component',
		  component: ()=>import('./views/demo/vue/component.vue')
		},
    {
      path: '/compModel',
      name: 'compModel',
      component: ()=>import('./views/demo/vue/demo.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: ()=>import('./views/demo/vue/list.vue'),
      meta:{
      	 isUseCache: false,  // 这个字段的意思稍后再说      
        keepAlive: true  // 通过此字段判断是否需要缓存当前组件  
      }
    },
     {
      path: '/detail',
      name: 'detail',
      component: ()=>import('./views/demo/vue/detail.vue'),
      
    },
		{
		  path: '/slot',
		  name: 'slot',
		  component: ()=>import('./views/demo/vue/slot.vue'),
		  
		},
		{
		  path: '/input',
		  name: 'input',
		  component: ()=>import('./views/demo/input.vue'),
		  
		},
		{
		  path: '/nextTick',
		  name: 'nextTick',
		  component: ()=>import('./views/demo/vue/nextTick.vue'),
		  
		},
		{
		  path: '/extends',
		  name: 'extends',
		  component: ()=>import('./views/demo/vue/extends.vue'),
		  
		},
		{
		  path: '/export',
		  name: 'export',
		  component: ()=>import('./views/demo/es6/export.vue'),
		  
		},
		{
		  path: '/kuayu',
		  name: 'kuayu',
		  component: ()=>import('./views/demo/kuayu.vue'),
		  
		},
  ]
})
