<template>
	<div id="">
		<van-cell-group>
		  <van-cell title="单元格" value="内容" />
		  <van-cell title="单元格" value="内容" label="描述信息" />
		</van-cell-group>
		<van-loading />
		<van-loading type="spinner" />
		上拉菜单
		<van-button type="default" @click="showF">弹出菜单</van-button>
		<van-action-sheet
		  v-model="show"
		  :actions="actions"
		  @select="onSelect"
		/>
	</div>
	
</template>

<script>
	import {Loading,ActionSheet ,Button,Toast ,Cell, CellGroup} from "vant"
	export default{
		name:'vant',
		data(){
			return {
				show: false,
		        actions: [
			        { name: '选项' },
			        { name: '选项' },
			        { name: '选项', subname: '描述信息' }
			      ]
				
			}
		},
		components:{
			[Loading.name]:Loading,
			[ActionSheet.name]:ActionSheet,
			[Button.name]:Button,
			[Toast.name]:Toast ,
			[Cell.name]:Cell,
			[CellGroup.name]:CellGroup
			
		},
		methods:{
			 onSelect(item) {
		      // 点击选项时默认不会关闭菜单，可以手动关闭
		      this.show = false;
		      Toast(item.name);
		    },
		    showF(){
		    	this.show=true;
		    }
		}
	}
</script>

<style>
</style>