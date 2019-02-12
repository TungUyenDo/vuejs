
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

						<a id="show-modal" style="padding:0 5px; color:#fff" class="btn btn-success" @click="openModal(i)">
							View Modal Detail
						</a>
						<a @click="delATodo(i)" class="btn btn-danger" style="padding:0 5px; color:#fff">Delete</a>
					</li>
					
				</ul>
				
		   </div>
		   <div class="col-md-5">
			   <todo-detail  v-on:status="statusLoader" v-bind:detail.sync="detailList"></todo-detail>
		   </div>

		   <todo-modal :isShowModal="showModal" @close="showModal = false" :dataDetailOnModal="detailList" ></todo-modal>
		    
	   </div>

	   <div class="row">
	   		<div class="container">
	   			<div class="col-md-12">
	   				<!-- <date-picker-wrapper></date-picker-wrapper> -->
	   			</div>
	   		</div>
	   </div>


		<br>
		<br>
		<br>
		<br>
	</div>
	
</template>

<script>
	import todoDetail from "./todo-detail";
	import datePickerWrapper from "../date-picker/date-picker.wrapper";
	import todoModal from './todo-modal'

	export default {
		name:'todoList',
		data: function() {
			return {
				res_fetch:'',
				detailList:'',
				status : false,
				showModal: false,
			}
		},
		components:{
			todoDetail,
			datePickerWrapper,
			todoModal
		},
		mounted() {
			this.fetchDataLocal();
		},
		methods: {
			fetchDataLocal: function () {
			const link = 'http://localhost:3000/list';
			const options = {
					method: 'GET',
					headers: {
						'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
					},
					
				}
				fetch(new Request(link))
					.then((response) => { return response.json() })
					.then((data) => {
						this.res_fetch = data;
						// console.log(this.res_fetch)
					})
					.catch( error => { console.log(error); });
			},
			goToDetail: function (event) {
				// console.log(event);
				this.detailList = event;
			},
			goToModal: function (event) {
				// console.log(event);
				this.detailList = event;
			},
			delATodo: function (item) {
		 		var options = {
		 			method : 'DELETE'
		 		}
			   fetch('http://localhost:3000/list' + '/' + item.id,options)
					.then((response) => { 
						return response.json() 
					})
					.then((data) => {
						console.log(data);
						this.fetchDataLocal()
					})
					.catch( error => { console.log(error); });
		    },

		    statusLoader : function(data){
		    	// console.log(data);
		    	if(data){
		    		this.fetchDataLocal()
		    	}
		    },
			say: function (event){
				console.log(event)
			},
			add: function (event){
				console.log(event)
			},
			openModal:function(event){
				this.detailList = event;
				this.showModal = true;

			}
			
		},
		events: {
		    
		}

	}
</script>

