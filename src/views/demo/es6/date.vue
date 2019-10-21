<template>
	<div>
		date:{{date}};
		<hr>
		date:{{date1}}
		<hr>
		date:{{date2}}
		<hr>
		date:{{date3}}
		<hr>
		date:{{date4}}
	</div>
</template>

<script>
	import tool from '../../../assets/tool.js'
	export default{
		name:"date",
		data(){
			return {
				date:null,
				date1:null,
				date2:null,
				date3:null,
				date4:null
			}
		},
		mounted(){
			console.log(tool.formatDate);
			this.date=tool.formatDate('2019-09-12');
			this.date1=tool.formatDate(new Date(),1)
			this.date2=tool.formatDate(new Date(),2)
			this.date3=tool.formatDate(new Date(),1,'/')
			this.date4=tool.formatDate(new Date(),1,' ')
		}
	}
</script>

<style>
</style>
