
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
					<!-- <div style="margin: 3px" class="btn btn-success" @click="getATodo(detail)">
						View Info Detail
					</div> -->

					<!-- <div style="margin: 3px" class="btn btn-primary" @click="updateTodo(detail)">
						Update Todo
					</div> -->
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
		components:{
		},
		props:{
			detail:''
		},
		data: function () {
		    return {
		      message: 'not updated',
		      status : false,
			  atodo : {},
			  
		    }
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
			   fetch('http://localhost:3000/list/' + item.id, options)
					.then((response) => { 
						 console.log(response)
						return response.json() 
					})
					.then((data) => {
						console.log(data)
					})
					.catch( error => { console.log(error); });
		    },

		    delATodo: function (item) {
		    	// console.log(this.status)
		 		var options = {
		 			method : 'DELETE'
		 		}
			   fetch('http://localhost:3000/list' + '/' + item.id,options)
					.then((response) => { 
						return response.json() 
					})
					.then((data) => {

						// set null for form
						this.detail.body = ''
						this.detail.id = ''
						this.detail.title = ''

						// set status = true;
						this.status = true;

						//send status to list for update new list
						this.$emit('status', this.status);
					})
					.catch( error => { console.log(error); });
		    },

		    getATodo: function (item) {
		    	const options = {
		    		method: 'GET',
		    	}

			   fetch(('http://localhost:3000/list' + '?id=' + item.id),options)
					.then((response) => { 
						return response.json() 
					})
					.then((data) => {
						this.atodo = {
							data : data[0],
							// showModal : true
						};
						// console.log(this.atodo)
						// this.$emit('dataATodo', data[0]);
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
		mounted() {
			console.log('mounted')
		},
		created() {
			console.log('created')
		},
	}
</script>
