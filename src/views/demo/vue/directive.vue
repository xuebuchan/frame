<template>
	<div class="">
		<input type="" name="" id="" value="123" />
		<input type="text" value="聚焦" v-focus/>
		<input type="" name="" id="" value="hahah" v-focuss/>gh
		
	</div>
</template>
	
<script>
	//如果两个v-focus谁在后面谁聚焦
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