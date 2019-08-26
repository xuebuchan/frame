<template>
	<div >
		<div class="title">
			{{title}}
		</div>
		<div class="" v-if="aaa">
			hahah
		</div>
		<div class="container">
			<div>基础用法</div>
			<!--<van-button @click="toastF">轻提示</van-button>-->
			<button @click="toastF">123</button>
		</div>
		<van-action-sheet v-model="show" :actions="actions" :overlay="overlay" :title="title" :round="round"  cancel-text="取消"></van-action-sheet>
		<!--<van-tabs v-model="activeName">
		  <van-tab title="标签 1" name="a">内容 1</van-tab>
		  <van-tab title="标签 2" name="b">内容 2</van-tab>
		  <van-tab title="标签 3" name="c">内容 3</van-tab>
		</van-tabs>-->
	</div>
</template>

<script>
	import {Button ,Toast,ActionSheet,Tab,Dialog} from "vant"
//import * as vant from "vant" 
import {mixinsTest} from "./mixins.js"
	export default{ 
		name:"toast1",
		data(){
			return {
				title:"toast 轻提示",
				show:false,
				actions:[
					{name:"123",loading:true},
					{name:"234",disabled:true}
				],
				activeName:2,
				overlay:true,
				 message: 'goodbye',
      			bar: 'def',
      			round:true,
      			aaa:true
      			
			}
		},
		mixins:[mixinsTest],
		components:{
			[Button.name]:Button,
			[ActionSheet.name]:ActionSheet,
			[Tab.name]:Tab,
			[Dialog.name]:Dialog
		},
		methods:{
			toastF(){
				this.show=true;
				/*Dialog.alert({
					title:"提示",
					message:"hahah"
				})*/
			}
		},
		mounted(){
			window.vm=this;
			console.log(Tab);
			console.log(this.$data);
			this.world()
		}
	}
</script>

<style>
</style>