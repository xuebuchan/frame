<template>
	<div>
		<button @click="enter">跳转</button>
	</div>
</template>

<script>
	export default{
		name:"route",
		methods:{
			enter(){
				this.$router.push({path:"/computed"})
			}
			
		},
		data(){
			return {
				
			}
		},
		beforeCreate(){
			console.log("1beforeCreate")
		},
		created(){
			console.log("1created")
		},
		beforeMount(){
			console.log("1beforeMount")
		},
		mounted(){
			console.log("1mounted")
		},
		beforeUpdate(){
			console.log("1beforeUpdated")
			
			
		},
		updated(){
			console.log("1updated")
		},
		beforeDestroy(){
			console.log("1beforeDestroy")
		},
			
		destroyed(){
			console.log("1beforeDestroy")
		},
		beforeRouteLeave (to, from, next) {
			console.log("1beforeRouteLeave")
			next()
		  // 导航离开该组件的对应路由时调用
		  // 可以访问组件实例 `this`
		}
	}
	
</script>

<style>
</style>
