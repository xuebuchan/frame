<template>
	<div>
		<div>{{count}}</div>
		<button @click="add">增减</button>
		<div>{{price}}</div>
	</div>
</template>

<script>
	import { mapState ,mapMutations} from 'vuex'
	
	export default{
		name:"store",
		data(){
			return {
				
			}
		},
		// 1
// 		computed:{
// 			count:function(){
// 				return this.$store.state.count
// 			},
// 			price:function(){
// 				return this.$store.state.price
// 			}
// 		}
		// 2
// 		computed:mapState({
// 			count:state=>state.count,
// 			price:state=>state.price
// 		})
		// 3
		computed:mapState([
			"count",
			"price"
		]),
		mounted(){
			console.log(this.$store.getters.doneTodos,"123");
			console.log(this.$store.getters.getTodoById(2),"123")
		},
		methods:{
			add(){
				this.$store.commit("increment",this.price)
			},
			...mapMutations([
			  'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

			  // `mapMutations` 也支持载荷：
			  'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
			]),
// 			...mapMutations({
// 			  add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
// 			})
		}
	}
</script>

<style>
</style>
