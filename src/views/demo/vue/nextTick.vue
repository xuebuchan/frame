<template>
	<div>
		<div v-for="item in list ">
			{{item}}
		</div>
		<button @click="push">按钮</button>
	</div>
</template>

<script>
	export default{
		name:"nextTick",
		data(){
			return {
				list:[1,2,3,4,5,6,7,8,9],
			}
		},
		
		methods:{
        push(){
            this.list.push(11);
            // this.nextTick(function(){
				console.log(this.list)
				console.time('p1')
                console.log('数据已经更新')
            // });
            this.$nextTick(function(){
                console.log('v-for渲染已经完成')
				console.timeEnd('p1')
            })
        }
    
		},
	}
</script>

<style>
</style>
