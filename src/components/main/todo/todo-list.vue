
<template>
   <div class="todo-list">
		<ul class="todo-list__list">
			<li>
				<a href="#">Item 1</a>
			</li>
			<li>
				<a href="#">Item 2</a>
			</li>
			<li>
				<a href="#">Item 3</a>
			</li>
			<li>
				<a href="#">Item 4</a>
			</li>
		</ul>
	</div>
	
</template>

<script>
	export default {
		name:'todoList',
		components:{
		},
		mounted() {
		}
	}
</script>
<style>
	.todo-list__list li{
		padding:5px 0
	}
</style>

