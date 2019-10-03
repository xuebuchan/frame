<template>
	<div>
		<button v-for="item in list" @click="clickF(item)">{{item}}</button>
		<keep-alive>
			<components :is="tab"></components>
		</keep-alive>
		
	</div>
</template>

<script>
	import computed from './computed.vue';
	import directive from './directive';
	import nextTick from './nextTick.vue';
	import list from './list.vue'
	export default{
		name:"components",
		data(){
			return {
				list:["nextTick","computed",'directive','list'],
				tab:"nextTick"
			}
		},
		mounted(){
			
		},
		components:{
		computed,directive,nextTick,list	
		},
		methods:{
			clickF(item){
				this.tab=item
			}
		}
	}
</script>

<style>
</style>
