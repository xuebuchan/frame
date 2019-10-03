<template>
	<div>
		<!-- <div>开始</div> -->
		<hr>
		<!-- 匿名slot -->
		1<slot>sd</slot>
		
		<!-- <div>子元素中中中</div> -->
		<hr>
		<!-- 2具名slot middle -->
		3<slot name="middle">xx</slot>
		<!-- <div>地</div> -->
		<hr>
		<!-- 4具名slot bottom -->
		5<slot name="bottom"></slot>
		<!-- 6子元素其他 -->
		<!-- <div>哈哈哈</div> -->
	</div>
</template>

<script>
	export default{
		name:"slotChild",
		
	}
</script>

<style>
</style>
