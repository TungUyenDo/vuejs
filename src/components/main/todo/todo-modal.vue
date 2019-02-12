
<template>
	<div>
		<transition name="modal" >
			<div class="modal-mask" v-if="isShowModal">
				<div class="modal-wrapper">
					<div class="modal-container">

					<div class="modal-header" style="justify-content:center">
						<div style="    height: 30px;
								    line-height: 30px;
								    text-align: center;
								    width: 30px;
								    border: 1px solid;
								    border-radius: 50%;">
							{{dataDetailOnModal.id}}
						</div>
					</div>

					<div class="title" style="text-align:center; 
											margin-top:20px;    
											background-color: #215b41;
    										color: #fff;">
							{{dataDetailOnModal.title}}
						</div>

					<div class="modal-body">
						<div class="body">
							{{dataDetailOnModal.body}}
						</div>
					</div>

					<div class="modal-footer" style="justify-content: center;">
						<button class="modal-default-button btn btn-primary" @click="$emit('close')">
							OK 
						</button>
					</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
	
	
</template>

<script>
	import bModal from 'bootstrap-vue/es/components/modal/modal';

	export default {
		name:'todoModal',
		data:function() {
			return{
				
			}
	    	
		},
		props:{
			isShowModal:'',
			dataDetailOnModal : ''
		},
		components:{
			bModal
		},
		mounted:function() {

		},
		created: function () {

		},
		methods: {
			
		}
	}
</script>
