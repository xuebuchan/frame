<template>
	<div>
		<iframe src="http://localhost:8082" frameborder="0"></iframe>
	</div>
</template>

<script>
	export default {
		name:"kuayu",
		data(){
			return {
				cors:["jsonp","ngnix","iframe","domain"]
			}
		},
		mounted(){
			document.domain = 'localhost';
			window.user = 'admin';
		}
	}
</script>

<style>
</style>
