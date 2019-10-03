<template>
	<div>
		<!-- 废弃 -->
		<div class="container">
			<div v-for="i in 100">
				{{i}}
			</div>
		</div>
		<!-- <div id="footer">
			<input type="text">
			<button>提交</button>
		</div> -->
		<input type="number" style="position: fixed;height: 30px;" :value="etwe" @click="sr(this);" onblur="nosr(this);" />
	</div>
</template>

<script>
	export default{
		data(){
			return {
					etwe:null,
					time1:null,
			}
		},
		methods:{
			sr(obj){
				 timer1 = setInterval(function() {
                    obj.scrollIntoView(false);
                }, 0);
			},
			nosr(obj){
				 clearInterval(timer1);
			}
			
		},
		mounted(){
			


			var oHeight = $(document).height(); //浏览器当前的高度   
		   $(window).resize(function(){
					
				if($(document).height() < oHeight){
				 
				$("#footer").css("position","static");
			}else{
				 
				$("#footer").css("position","absolute");
			}
				
		   });
		}
	}
</script>

<style scoped="scoped">
	.container{
		height: 667px;
	}
	#footer{
		display: flex;
		position: fixed;
		bottom: 0;
		height: 50px;
		background: red;
	}
</style>
