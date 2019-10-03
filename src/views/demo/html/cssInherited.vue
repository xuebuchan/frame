<template>
	<div class="">
		<!-- <div class="left">123</div>
		<div class="center">标题</div> -->
		<div class="test1">测试1</div>
		<!-- 打客服 -->
		<!-- //对于对于非替换元素的纯内联元素，其可视高度完全由line-height决定的，padding border 属性对可视高度没有任何影响 -->
		 <div class="test2">测试2</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	.container{
		position: relative;
		height: 46px;
		line-height: 46px;
		text-align: center;
		background: red;
		.left{
			position: absolute;
			left: 15px;
			bottom: 0;
			font-size: 14px;
			background: blue;
		}
		.center{
			color: white;
			max-width: 60%;
			margin: 0 auto;
			font-weight: 500;
		}
	}
	 .test1{font-size:20px; text-align:center;line-height:0; border:1px solid black; background: red;} 
	 .test2{font-size:1px; text-align:center;line-height:20px; border:1px solid black; background:red;}

</style>
