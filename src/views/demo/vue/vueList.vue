<template>
	<div class="container">
		<div v-for="item in data" class="item">
			<router-link :to="'/'+item.name">
				<div class="contain">
					<div>
						{{item.name}}
					</div>
					<div>
						{{item.des}}
					</div>
				</div>
				
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:"list",
		data(){
			return {
				data:[
					{name:"computed",des:"computed属性用法"},
					{name:"nextTick",des:"nextTick用法"},
					{name:"slot"},
					{name:"render"},
					{name:"compModel",des:"父子组件双向绑定用法"},
					{name:"extends"},
					{name:"directive"},
					{name:"list",des:"返回列表回到原位置"},
					{name:"component",des:"动态组件的用法"},
					{name:"store",des:"vue用法"},
					{name:"imgFit",des:"图片自适应宽高"},
					{name:"uploadFile",des:"文件上传"},
					{name:"route",des:"周期函数"}
					// {name:"detail"},
				]
			}
		},
		beforeRouteEnter(to,from,next){
			console.log("beforeRouterEnter");
			console.log(to,from,next);
			next(vm=>{
				console.log(vm.data)
			})
			
		}
	}
</script>

<style>
	.item{
		height: 32px;
		border: 1px solid #DDDDDD;
		margin-bottom: 10px;
		text-align: center;
		line-height: 32px;
		background: white;
		
	}
	.container{
		background: #DDDDDD;
	}
	.contain{
		display: flex;
		justify-content: space-around;
	}
</style>
