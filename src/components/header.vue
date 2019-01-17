
<template>
<div class='header'>
	<img alt="Vue logo" src="../assets/logo.png">
	<ex-nav></ex-nav>
</div>
</template>

<script>	
	import exNav from "./nav";

	export default {
		name:'exHeader',
		components:{
			exNav
		},
		mounted() {
		}
	}
</script>

<style>
	.header{
		text-align: center
	}
</style>

