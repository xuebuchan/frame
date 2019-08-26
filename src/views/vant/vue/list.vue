<template>
	
<div class="scroll">
	<router-link v-for="item in list" :key="item" :to='{path:"detail",query:{"id":item}}'>
		<van-cell :title="item"/>
	</router-link>
</div>

  
</template>

<script>
	import {List,Cell} from "vant"
	export default{
		name:"list",
		 data() {
		    return {
		      list: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,51,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
		      loading: false,
		      finished: false
		    };
		  },
		  components:{
		  	[List.name]:List,
		  	[Cell.name]:Cell
		  },
		   methods: {
			    onLoad() {
			      // 异步更新数据
			      setTimeout(() => {
			        for (let i = 0; i < 40; i++) {
			          this.list.push(this.list.length + 1);
			        }
			        console.log(this.list)
			        // 加载状态结束
			        this.loading = false;
			
			        // 数据全部加载完成
			        if (this.list.length >= 40) {
			          this.finished = true;
			        }
			      }, 500);
			    }
			  },
			  /*activated() {
				    // isUseCache为false时才重新刷新获取数据
				    // 因为对list使用keep-alive来缓存组件，所以默认是会使用缓存数据的         
				    if(!this.$route.meta.isUseCache){            
				        this.list = []; // 清空原有数据
				        this.onLoad(); // 这是我们获取数据的函数
				    } 
				    this.$route.meta.isUseCache = false;
				},
				beforeRouteLeave (to, from, next) {        
				    if (to.name == 'Detail') {
				        from.meta.isUseCache = true;    
				    }        
				    next();
				},*/

		  
	}
</script>

<style>
</style>