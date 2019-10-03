<template>
	<div>dcn</div>
</template>

<script>
	// import {str,log} from './import1.js'
	// import {a,b} from './import1.js'
	import  {a,b}  from './import1.js'
	import * as temp from './import1.js'
	import * as temp2 from './import2.js'
	import  temp3 from './import2.js'
	export default{
		name:"export1",
		data(){
			return{
				aa:null
			}
		},
		created(){
			// console.log(abc,'temp0')
			console.log(temp,'hahah')
		},
		mounted(){
			console.log(temp2)
			console.log(temp3)
		}
	}
</script>

<style>
</style>
