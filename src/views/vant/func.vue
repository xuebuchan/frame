<template>
	 <FunctionalButton :data="data" :child="child">
        click me
    </FunctionalButton>
</template>

<script>
	import FunctionalButton from "./function.js"
	export default{
		name:"func",
		components:{
			FunctionalButton
		},
		data(){
			return {
				data:'hahah',
				child:"哈哈"
			}
		}
	}
</script>

<style>
</style>