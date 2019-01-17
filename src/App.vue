<template>
	<div>
		<ex-header></ex-header>
		<ex-main></ex-main>
		<!-- <ex-footer></ex-footer> -->
	</div>
</template>

<script>
	// import example from "./components/example";
	import exHeader from "./components/header";
	import exMain from "./components/main";
	// import exFooter from "./components/footer";
	export default {
		name: 'App',
		components: {
			// example,
			exHeader,
			exMain,
			// exFooter
		},
		
	};

</script>
<style lang="scss">
	@import "./styles/index.scss";
</style>