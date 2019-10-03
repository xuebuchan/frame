<template>
	<div class="comp">
		
	</div>
</template>

<script>
	 export default{
		name:"comp",
		data(){
			return {}
		},
		mounted(){
			console.log(this.$route.params)
			console.log(this.$route.query)
		}
	}
</script>

<style>
</style>