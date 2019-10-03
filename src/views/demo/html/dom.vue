<template>
	<div>
		<div class="p1">
			哈哈哈开发 v 呢疯狂；短裤女倒计时v 
			<!-- <div v-for=" i in 100">{{i}}</div> -->
		</div>
		<div class="p2">
			<div v-for=" i in 100">{{i}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"dom",
		data(){
			return {
				
			}
		},
		mounted(){
			var dom=document.querySelector('.p1');
			console.log(dom);
			// 不包含边框的宽高
			// console.table(["clientHeight",dom.clientHeight,"clientWidth",dom.clientWidth]);
			console.log("clientHeight",dom.clientHeight)
			console.log("clientWidth",dom.clientWidth)
			// scrollHeight/scrollWidth/scrollLeft/scrollTop
			// 包含滚动条的内容宽高，没有滚动条时client和scroll相同
			console.log("scrollHeight",dom.scrollHeight)
			console.log("scrollWidth",dom.scrollWidth)
			// 包含边框的宽高
			console.log("offsetHeight",dom.offsetHeight)
			console.log("offsetWidth",dom.offsetWidth)
// 			console.log("innerHeight",dom.innerHeight)
// 			console.log("innerWidth",dom.innerWidth)
			console.log("scrollLeft",dom.scrollLeft)
			console.log("scrollTop",dom.scrollTop)
		}
	}
</script>

<style>
	.p1{
		width: 200px;
		height: 100px;
		padding: 20px;
		margin: 10px;
		border: 5px solid #42B983;
		overflow: scroll;
	}
</style>
