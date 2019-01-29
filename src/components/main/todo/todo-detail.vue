
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
					<div style="margin: 3px" class="btn btn-success" @click="getATodo(detail)">
						View Info Detail
					</div>
					<div style="margin: 3px" class="btn btn-primary" @click="updateTodo(detail)">
						Update Todo
					</div>
					<div style="margin: 3px" class="btn btn-danger" @click="delATodo(detail)">
						Delete Todo
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
		data:function(){
			return{
				url_posts : 'https://jsonplaceholder.typicode.com/posts',
				url_posts_local : 'http://192.168.1.158:8081/data.json',
			}
		},
		components:{
		},
		methods:{
			updateTodo: function (item) {
			  	const url = new Request(this.url_posts_local);
			  	const options = {
					method: 'PUT',
					headers: {
						'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
					},
					body: {
						'id':item.id,
						'title':item.title,
						'body':item.body
					}
				}
			   fetch( url, options)
			   console.log(options)
					.then((response) => { 
						return response.json() 
					})
					.then((data) => {
						console.log(data)
					})
					.catch( error => { console.log(error); });
		    },

		    delATodo: function (item) {
			   fetch(new Request(this.url_posts_local + item.id),{
					   method: 'DELETE',
					   headers:{
						   'Access-Control-Allow-Origin':'*',
						   'content-type': 'application/json',
					   }
			   })
					.then((response) => { 
						console.log(response);
						return response.json() 
					})
					.then((data) => {
						console.log(data)
					})
					.catch( error => { console.log(error); });
		    },
		    getATodo: function (item) {
		      console.log(item);
			   fetch(new Request(this.url_posts_local + '?id=' + item.id),{
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
		    	fetch(this.url_posts, {
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
            // this.testFetch()
		},
		created: function () {
			
		},
	}
</script>
