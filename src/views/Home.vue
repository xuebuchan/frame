<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<!-- <van-tabs v-model="active" @click="tab"> -->
  <!-- <van-tab :title="item.name" :to="'/home/'+item.name" v-for="item in data" > -->
		<!-- <router-view></router-view> -->
		<!-- {{item.name}} -->
	<!-- </van-tab> -->
<!-- </van-tabs> -->
      <p>{{$t('login.title')}}</p>
<div  class="tab">
	<router-link v-for="(item,index) in data" :to="'/home/'+item.name" tag="label" :key="index">{{item.name}}</router-link>
</div>
<keep-alive>
	<router-view></router-view>
</keep-alive>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {Tab,Tabs} from "vant"
export default {
  name: 'home',
  components: {
    HelloWorld,
		[Tab.name]:Tab,
		[Tabs.name]:Tabs
  },
	data(){
		return {
			active:0,
			name:"vue",
			data:[
				{name:'vue'},{name:'vant'},{name:"ecma"},{name:"else"},{name:"html"}
			]
		}
	},
	methods:{
		tab(name,title){
			console.log(name,title);
			this.name=title
			console.log(this)

		}
	},
    created() {
      console.log(this,"this")
    }

}
</script>
<style lang="less">
	.tab{
		display: flex;
		justify-content: space-around;
		flex-wrap: nowrap;
		height: 40px;
		label{
			text-align: center;
			line-height: 40px
		}
		.router-link-active{
			color: red
		}
	}
</style>
