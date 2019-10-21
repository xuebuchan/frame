<template>
	<div> {{$route.params.id}}
		<div class="img">
			<img src="../../assets/images/img2.png" alt="">
		</div>	
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="less">
	.img{
		height: 300px;
		// width: 300px;
		background: red;
		img{
			max-height: 100%;
			max-width: 100%;
		}
	}
</style>
