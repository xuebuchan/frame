<template>
	<div class="">
		<van-cell-group>
		  <van-cell title="单元格" value="内容" />
		  <van-cell title="单元格" value="内容" label="描述信息" />
		</van-cell-group>
		<div class="">
			{{value}}
		</div>
		<hr />
		 <div id="phone"></div>
	</div>
</template>

<script>
	import {Cell,CellGroup} from "vant"
	import {mixinsTest} from "../mixins.js"
	export default{
		name:"cell",
		data(){
			return{
				value:null,
				name:"xuwh"
			}
		},
		components:{
			[Cell.name]:Cell,
			[CellGroup.name]:CellGroup
		},
		mixins:[mixinsTest],
		beforeRouteEnter (to, from, next) {
		  next(vm => {
		    // 通过 `vm` 访问组件实例
		    console.log(vm.name);
		    vm.datalist=[1,2,3]
		  })
		},
		mounted(){
			this.value=this.$route.query;
			console.log(this.$route.query);
			console.log(this)
		}
	}
</script>

<style>
	   #phone{width:50px;height:50px;border-left:6px solid #EEB422;border-radius:20%;transform:rotate(-30deg);-webkit-transform:rotate(-30deg);margin:20px;margin-right:0px;position:relative;display: inline-block;top: -5px;}
    #phone:before{width:15px;height:15px;background:#EEB422;border-radius: 20%;content: "";position: absolute;left:-2px;top: 1px;}
    #phone:after{width:15px;height:15px;background:#EEB422;border-radius: 20%;content: "";position: absolute;left:-3px;top: 34px;}
</style>