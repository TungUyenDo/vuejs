
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
				<div class="btn btn-success">
					View Info Detail
				</div>
			</form>
			
		</div>
	</div>
	
</template>

<script>
	export default {
		name:'infoDetail',
		props: {
		},
		components:{
		},
		mounted() {
			
		},
		created: function () {
		},
	}
</script>
