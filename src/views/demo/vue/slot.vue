<template>
	<div>
		<slotChild>
			<!-- bottom slot开始 -->
			一<div slot="bottom">父bottom</div>
			二<p name="middle">父其他</p>
			三。slot 开始
			四<div slot="middle">父middle</div>
			五<div class="parent" @click="cli()">父元素</div>
		</slotChild>
	</div>
</template>

<script>
	import slotChild from './slotChild.vue'
	export default {
		name:"slotdemo",
		components:{
			slotChild
		},
		methods:{
			cli(){
				console.log(123)
			}
		},
		mounted(){
			console.log(this)
			console.log(slotChild)
		}
	}
</script>

<style>
	.parent{
		color: red;
	}
</style>
