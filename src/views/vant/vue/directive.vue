<template>
	<div class="">
		<input type="" name="" id="" value="hahah" v-focuss/>
		<input type="text" value="聚焦" v-focus/>
	</div>
</template>
	
<script>
	export default{
		name:"direct",
		directives:{
			 focuss: {
			    // 指令的定义
			    inserted: function (el) {
			      el.focus()
			    }
			  }
		}
	}
</script>

<style>
</style>