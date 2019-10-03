<template>
	<div>
		<div>
			extends
		</div>
	</div>
</template>

<script>
	import {mixinsTest} from '../js/mixins.js'
	import {extend} from '../js/extend.js'
	export default{
		name:'extends',
		mixins:[mixinsTest],
		extends:extend,
		created(){
			console.log('create')
		}
		
	}
</script>

<style>
</style>
