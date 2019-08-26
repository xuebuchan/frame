<template>
	<div class="comp2">
		<div id="" v-show="visible">
			demochild2
			<button @click="changeVisible">内按钮</button>
		</div>
	</div>
</template>

<script>
	export default{
		name:"compChild2",
		data(){
			return{
				
			}
		},
		props:{
			visible:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			changeVisible(){
				console.log(3)
				this.$emit("update:visible",false)
			}
		}
	}
</script>

<style>
</style>