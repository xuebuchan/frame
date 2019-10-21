<template>
	<div>
		<router-link v-for="item in data" :key="item.name" :to="item.name">{{item.name}}</router-link>
	</div>
</template>

<script>
	export default{
		name:"list",
		data(){
			return{
				data:[
					{name:"dom"},
					{name:"cssInherited"},
					{name:'imgFit'}
				]
			}
		}
	}
</script>

<style>
</style>
