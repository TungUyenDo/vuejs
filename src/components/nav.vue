<template>
	<div class="navigation">
		<ul>
			<router-link to="/" tag="li" exact>
				<a>home</a>
			</router-link>
			<router-link to="/todo" tag="li">
				<a>Todo</a>
			</router-link>
			<router-link to="/about" tag="li">
				<a>About</a>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "exNav"
	};
</script>

<!-- <style lang="scss">
.navigation {
     ul {
         list-style: none;
         padding: 0;
         li {
             display: inline;
             padding: 0 10px;
             a {
                 text-transform: uppercase
             }
         }
     }
     .router-link-active {
         a {
             color: $color;
         }
     }
 }
</style> -->