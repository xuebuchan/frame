<template>
	<div>
		<van-picker :columns="columns" @change="onChange" :show-toolbar="true">
			<!-- <h1 slot="columnsTop" name="columns-top" style="height: 50px;background: red;">哈哈哈</h1> -->
			<!-- <h1 slot="columns-bottom" name="columns-bottom" style="height: 50px;background: red;">哈哈</h1> -->
			<!-- <h1  style="height: 50px;background: red;">哈1</h1> -->
			 <template v-slot:columns-bottom>
				 <input type="text" placeholder="开始">
				 <input type="text" placeholder="结束">
			 </template>

		</van-picker>
	</div>
</template>

<script>
	import {Picker} from "vant"
	export default{
		name:"picker",
		data(){
			const citys = {
			  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
			  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
			};
				
			const noon={
				"am":"上午",
				"pm":"下午"
			}
			return {
				 columns: [
							{
							  values: Object.keys(citys),
							  className: 'column1'
							},
							{
								 values: Object.keys(noon),
								 className:"p3"
							},
							{
							  values: citys['浙江'],
							  className: 'column2',
							  defaultIndex: 2
							}
						  ],
						  obj:citys
			}
		},
		components:{
			[Picker.name]:Picker
		},
		 methods: {
			 onChange(picker, values) {
			  picker.setColumnValues(2,this.obj[values[0]]);
			}
		  }
		
	}
</script>

<style>
</style>
