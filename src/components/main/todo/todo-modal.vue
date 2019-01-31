
<template>
   <div class="todo-detail">
		<!-- <div class="btn btn-success">Say</div> -->

			<button @click="showModal" ref="btnShow">
		    Open Modal
		  </button>
		  <b-modal @hidden="onHidden">
		    <div class="d-block">Hello From My Modal!</div>
		    <button @click="hideModal">Close Me</button>
		 </b-modal>
	</div>
	
</template>

<script>
	import bModal from 'bootstrap-vue/es/components/modal/modal';

	export default {
		name:'todoModal',
		props: ['aTodoModal'],
		data:function() {
			return{
				// showModal: false
			}
	    	
	  	},
		components:{
			bModal
		},
		mounted:function() {

		},
		created: function () {
			console.log(this.aTodoModal);
			// if(this.aTodoModal.showModal){
			// 	this.showModal = true
			// }
		},
		methods: {
			say: function (event){
				console.log(event)
			},
		  	showModal () {
		    	this.$root.$emit('bv::show::modal','modal1')
		  	},
		  	hideModal () {
		    	this.$root.$emit('bv::hide::modal','modal1')
		  	},
		  	onHidden (evt) {
			    // Return focus to our Open Modal button
			    // See accessibility below for additional return-focus methods
			    this.$refs.btnShow.$el.focus()
		  	}
		}
	}
</script>
