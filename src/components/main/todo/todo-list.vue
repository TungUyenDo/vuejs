
<template>
   <div class="todo-list container">
	   <div class="row">
		   <div class="col-md-7">
			   <div class="todo-list__heading">
				   <span class="float-left">List Todo</span>
				   <div class="btn btn-danger float-right" style="text-align:right; margin-bottom:5px">Delete All</div>
				   <div class="clearfix"></div>
			   </div>
				<ul class="todo-list__list">
					<li class="media text-muted pt-3" v-for="i in res_fetch" v-bind:key="i.id" >
						<a class="media-body pb-3 mb-0 small lh-125 border-gray" v-on:click="goToDetail(i)">{{i.id}}--> {{i.title}}</a>
						<a class="btn btn-danger" style="padding:0 5px; color:#fff">Delete</a>
					</li>
					
				</ul>
				
		   </div>
		   <div class="col-md-5">
			   <todo-detail v-bind:detail ="detail"></todo-detail>
		   </div>
	   </div>

	   <!-- info-detail -->
	   <!-- <info-detail v-on:click.native="say('hi! cuc cut')"></info-detail> -->



		<br>
		<br>
		<br>
		<br>
	</div>
	
</template>

<script>
	import todoDetail from "./todo-detail";
	import infoDetail from "./info-detail";
	export default {
		name:'todoList',
		data: function() {
			return {
				res_fetch:'',
				detail:''
			}
		},
		components:{
			todoDetail,
			infoDetail
		},
		mounted() {
			this.fetchDataLocal()
		},
		methods: {
			fetchDataLocal: function () {
			const link = 'http://192.168.1.158:8081/data.json';
			const options = {
					method: 'GET',
					headers: {
						'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
						'Access-Control-Allow-Origin':'*',
					},
					
				}
				fetch(new Request(link))
					.then((response) => { return response.json() })
					.then((data) => {
						this.res_fetch = data;
						console.log(this.res_fetch)
					})
					.catch( error => { console.log(error); });
			},
			goToDetail: function (event) {
				// console.log(event);
				this.detail = event;
			},
			say: function (event){
				console.log(event)
			},
			add: function (event){
				console.log(event)
			},
			
		},
		events: {
		    'child-msg': function (msg) {
		      // `this` in event callbacks are automatically bound
		      // to the instance that registered it
		      this.messages.push(msg)
		    }
		}

	}
</script>

