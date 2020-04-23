<template>
	<div v-show="visible1">
		<button @click="close">内按钮</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {}
		},
		props:["visible1"],
		methods:{
			close(){
				this.$emit("update:visible1",false)
			}
		}
	}
</script>

<style>
</style>