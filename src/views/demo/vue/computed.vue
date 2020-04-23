<template>
	<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
  <p>{{haha}}</p>
  <input type="" name="" id=""v-model="obj.a" />
</div>
</template>
	
<script>
	export default{
		data(){
			return{
				message: 'Hello',
				obj:{
					a:1,
					b:2,
					c:{
						name:"xuwh",
						className:[1,2,3]
					}
				}
			}
	    
	  },
	  computed: {
	    // 计算属性的 getter
	    reversedMessage: function () {
	      // `this` 指向 vm 实例
	      return this.message.split('').reverse().join('')
	    },
	    haha:(vm)=>{
	    	console.log(this);
	    	console.log(vm);
	    	return vm.message+"1234"
	    }
	  },
	  watch:{
	  	message(newVal,oldVal){
	  		console.log(newVal,oldVal);
	  	},
	  	'obj.a':function(){
	  		console.log(this.obj)
	  	},
	  	obj:{
	  		handler:function(){
	  			console.log(this.obj,123)
	  		},
	  		deep:true
	  	}
	  },
	  methods:{
	  	print(){
	  		console.log(this.obj)
	  	},
	  },
		beforeCreate(){
			console.log("2beforeCreate")
		},
		created(){
			window.abc=this;
			
			console.log("2created")
		},
		beforeMount(){
			console.log("2beforeMounted")
		},
		mounted(){
			console.log("2mounted")
		},
//		beforeUpdate(){
//			console.log("2beforeUpdated")
//		},
//		updated(){
//			console.log("2updated")
//		},
		beforeDestroy(){
			console.log("2beforeDestroy")
		},
			
		destroyed(){
			console.log("2Destroy")
		},
			beforeRouteEnter(to, from, next){
				console.log("beforeRouteEnter")
				next()
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
		console.log("beforeRouteUpdate")
		next()
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
		console.log("beforeRouteLeave")
		next()
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
	}
</script>

<style>
</style>