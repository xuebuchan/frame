<template>
	<div>
		姓名：<input type="text" class="name" v-model="name">
		年龄：<input type="text" v-model="age">
		<button @click="submit">提交</button>
	</div>
</template>

<script>
	import {api} from '../../../assets/interface.js'
	export default{
		name:"inter",
		data(){
			return {
				name:null,
				age:null
			}
		},
		methods:{
			submit(){
				this.$axios({
					url:api.addPerson,
					method:"post",
					data:{
					name:this.name,
					age:this.age
					}
				}).then((res)=>{
					console.log(res)
				})
				
			}
		}
	}
</script>

<style>
</style>
