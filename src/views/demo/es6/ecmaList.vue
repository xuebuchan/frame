<template>
	<div>
		<div v-for="item in data">
			<router-link :to="'/home/'+item.name" >{{item.name}}展示在内层router-view中</router-link>
			<!-- <hr> -->
			<!-- <router-link :to="'/'+item.name" v-else>{{item.name}}展示在外层router-view中</router-link> -->
		</div>
	</div>
</template>

<script>
	export default{
		name:"es6",
		data(){
			return {
				data:[
					{name:'interface',}
				]
			}
		}
	}
</script>

<style>
</style>
