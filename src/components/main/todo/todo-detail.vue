
<template>
   <div class="todo-detail">
		<div class="heading">Todo Detail</div>
		
		<div class="detail">
			<p style="color:#fff" v-if="!detail"><i>Select on list!</i></p>
			<form  v-if="detail" >
				<div class="form-group">
					<input v-model="detail.id" type="text" class="form-control" placeholder="Id" readonly>
				</div>
				<div class="form-group">
					<input v-model="detail.title" type="text" class="form-control" placeholder="Title...">
				</div>
				<div class="form-group">
					<textarea v-model="detail.body" type="text" rows="5" class="form-control" placeholder="Description..."></textarea>
				</div>
				<div style="text-align:center">
					<div class="btn btn-success">
						View Info Detail
					</div>
					<div class="btn btn-primary" @click="updateTodo(detail)">
						Update Todo
					</div>
				</div>
				
			</form>
			
		</div>
	</div>
</template>

<script>
	export default {
		name:'todoDetail',
		props: {
			detail : ''
		},
		components:{
		},
		methods:{
			updateTodo: function (item) {
		      console.log(item);
			   fetch(new Request('https://jsonplaceholder.typicode.com/posts' + item.id, item),{
			   		method: 'PUT',
			   })
					.then((response) => { 
						return response.json() 
					})
					.then((data) => {
						console.log(data)
					})
					.catch( error => { console.log(error); });
		    },

		    getATodo: function (item) {
		      console.log(item);
			   fetch(new Request('https://jsonplaceholder.typicode.com/posts?id=' + item.id),{
			   		method: 'GET',
			   })
					.then((response) => { 
						
						return response.json() 
					})
					.then((data) => {
						console.log(data)
					})
					.catch( error => { console.log(error); });
		    },

		    // test for Get all posts
		    testFetch:function(){
		    	fetch('https://jsonplaceholder.typicode.com/todos', {
				        method: 'GET',
				}).then((res) => res.json())
				.then((data) =>  console.log(data))
				.catch((err)=>console.error(err))
		    }
		},
		data:function(){
			return{

			}
		},
		mounted() {
            this.testFetch()
		},
		created: function () {
			
		},
	}
</script>
