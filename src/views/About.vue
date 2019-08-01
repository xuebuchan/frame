<template>
  <div class="about">
    <h1>vant</h1>
    <ul>
    	<li v-for="item in data">
    		<router-link :to="{ name: item.routerName, params: { userId: 123 }}">{{item.title}}</router-link>
    	</li>
    	<router-link :to="{ name: 'comp', params: { name: 123 }}">haha</router-link>
    	<router-link :to="{ name: 'directive', params: { name: 123 }}">指令</router-link>
    </ul>
    </ul>
    
    
  </div>
</template>
<script type="text/javascript">
	export default{
		name:"contenter",
		data(){
			return {
				data:[
					{routerName:"loading",title:"loading toast actionsheet cell cellgroup"},
					{routerName:"toast",title:"toast"},
				]
			}
		}
	}
</script>
<style>
	h1{
		height: 40px;
		line-height: 40px;
		background: #ccc;
		border-bottom: #dddddd;
	}
	li{
		
	}
	.about{
		background: #eeeeee;
		position: relative;
		top: 0;
		bottom: 0;
		left: 0;
		bottom: 0;
		margin: auto;
	}
</style>
