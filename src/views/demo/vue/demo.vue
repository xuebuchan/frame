<template>
	<div class="comp1">
		<button @click="open">按钮</button>
		<comp v-model="show" v-show="show" :propF="propf"></comp>
		<hr />
		<button @click="change">按钮2</button>
		<comp2 :visible.sync="visible"></comp2>
		<img :src="url" alt="" />
		
	</div>
	
</template>
	
<script>
	import comp from './demoChild.vue'
	import comp2 from './demoChild2.vue'
	export default{
		name:"comp1",
		data(){
			return {
				show:false,
				visible:false,
				url:"imag/a",
				propf:"fade"
			}
		},
		components:{
			comp,comp2
		},
		methods:{
			open(){
				this.show=true;
			},
			change(){
				this.visible=true
			}
		}
		
	}
</script>

<style>
</style>