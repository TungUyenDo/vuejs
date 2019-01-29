
<template>
<div class='header'>
	<img alt="Vue logo" src="https://lh3.googleusercontent.com/lEZ6jqIC9Umtp8HAWo0tgTCGov6LVOoi-h5JSoFYrE6CEwm0d3mspz7wNs36_Hhf8ogLu0hDqL0KDXdhEa9XPx5X_Oc2odl7TDu8=w240-h210-rw-no">
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

