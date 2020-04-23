<template>
	<div class="comp" v-show="value">
		123
		<button @click="close">点击</button>
		<button @click="close1">点击2</button>
	</div>
</template>

<script>
	export default{
		name:'compChild',
		data(){
			return {
				
			}
		},
		props:{
			value:{
				type:Boolean,
				default:false
			},
			 propF: {
		      type: String,
		      validator: function (t) {
		        // 这个值必须匹配下列字符串中的一个
		        return t === 'fade' || t === 'slide'
		      },
		      defalut:'slide'
		     }
		},
		methods:{
			close(){
//				this.value=false
				this.$emit("input",false)
			},
			close1(){
				
			}
		}
	}
</script>

<style>
	.copm{
		background: red;
		height: 50px;
	}
</style>