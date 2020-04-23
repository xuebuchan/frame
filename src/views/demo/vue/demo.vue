<template>
	<div class="comp1">
		<button @click="open">按钮</button>
		<comp v-model="show"  :propF="propf"></comp>
		<hr />
		<button @click="change">按钮2</button>
		<comp2 :visible.sync="visible"></comp2>
		<img :src="url" alt="" />
		<button @click="change3">按钮3</button>
		<comp3 :visible1.sync="show1"></comp3>
	</div>
	
</template>
	
<script>
	import comp from './demoChild.vue'
	import comp2 from './demoChild2.vue'
	import comp3 from'./demoChild3.vue'
	export default{
		name:"comp1",
		data(){
			return {
				show:false,
				visible:false,
				show1:false,
				url:"imag/a",
				propf:"fade"
			}
		},
		components:{
			comp,comp2,comp3
		},
		methods:{
			open(){
				this.show=true;
			},
			change(){
				this.visible=true
			},
			change3(){
				this.show1=true;
			}
		}
		
	}
</script>

<style>
</style>