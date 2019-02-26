<template>
	<div class="home">
		<h2>Welcome to my sites!</h2>
		<div class="container">
			<div class="row">
				<div class="col-md-5">
					<form id="app" @submit="checkForm" novalidate="true">
		
						<p v-if="errors.length">
							<b>Please correct the following error(s):</b>
							<ul>
								<li v-for="error in errors">{{ error }}</li>
							</ul>
						</p>
		
						<p>
							<label for="name">Name</label>
							<input class="form-control" id="name" v-model="name" type="text" name="name">
						</p>
		
						<p>
							<label for="age">Age</label>
							<input class="form-control" id="age" v-model="age" type="number" name="age" min="0">
						</p>
		
						<p>
							<label for="movie">Favorite Movie</label>
							<select class="form-control" id="movie" v-model="movie" name="movie">
								<option>Star Wars</option>
								<option>Vanilla Sky</option>
								<option>Atomic Blonde</option>
							</select>
						</p>
		
						<p style="text-align:center">
							<input class="btn btn-success" :disabled="!submitted" type="submit" value="Submit">
						</p>
		
					</form>
				</div>
				<div class="col-md-5">
					<form @submit.prevent="register" method="post">
						<div>
						  <label>Name:</label>
						  <input class="form-control" type="text" v-model="user.name" />
						  <div>{{ errors.name }}</div>
						</div>
						<div>
						  <label>Phone:</label>
						  <input class="form-control" type="text" v-model="user.phone" />
						  <div>{{ errors.phone }}</div>
						</div>
						<div>
						  <label>Email:</label>
						  <input class="form-control" type="text" v-model="user.email" />
						  <div>{{ errors.email }}</div>
						</div>
						<div>
						  <label>Password:</label>
						  <input class="form-control" type="password" v-model="user.password" />
						  <div>{{ errors.password }}</div>
						</div>
						<div style="text-align:center; margin-top: 15px;">
						  <button class="btn btn-danger" type="submit">Submit</button>
						</div>
					  </form>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>

	// rule validate
	const validateName = name => {
		if (!name.length) {
			return { valid: false, error: "This field is required" };
		}else{
			return { valid: true, error: null };
		}

		
	};

	const validatePhone = phone => {
		if (!phone.length) {
			return { valid: false, error: 'This field is required.' };
		}
		else if (!phone.match(/^[+][(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,7}$/gm)) {
			return { valid: false, error: 'Please, enter a valid international phone number.' };
		}
		else{
			return { valid: true, error: null };
		}
	
	}

	

	const validateEmail = email => {
		if (!email.length) {
			return { valid: false, error: "This field is required" };
		}
		else if (!email.match(/^\w+([.-]?\w+)_@\w+(_[_.-]?\w+)_(.\w{2,3})+$/)) {
			return { valid: false, error: "Please, enter a valid email." };
		}
		else{
			return { valid: true, error: null };
		}
	};

	const validatePassword = password => {
		if (!password.length) {
			return { valid: false, error: "This field is required" };
		}
		else if (password.length < 7) {
			return { valid: false, error: "Password is too short" };
		}
		else{
			return { valid: true, error: null };
		}
	};
	// rule validate	


	export default {
		name: 'exHome',
		
		data: function() {
			return {
				errors: [],
				name: null,
				age: null,
				movie: null,
				submitted: false,
				user: {
					email: '',
					password: '',
					name: '',
					phone: ''
				},
				valid: true,
				success: false,
				errors: {},
				message: null
			}
		},
		methods:{
			checkForm: function (e) {
				console.log(e)
				console.log(this.name,this.age)
				// if (this.name && this.age) {
				// 	return true;
				// }

				// this.errors = [];

				// if (!this.name) {
				// 	this.errors.push('Name required.');
				// }
				// if (!this.age) {
				// 	this.errors.push('Age required.');
				// }

				e.preventDefault();
			},
			register() {
				this.errors = {}

				const validName = validateName(this.user.name);
				this.errors.name = validName.error;
				if (this.valid) {
					this.valid = validName.valid
				}

				const validPhone = validatePhone(this.user.phone);
				this.errors.phone = validPhone.error;
				if (this.valid) {
					this.valid = validPhone.valid
				}

				const validEmail = validateEmail(this.user.email);
				this.errors.email = validEmail.error;
				if (this.valid) {
					this.valid = validEmail.valid
				}

				const validPassword = validatePassword(this.user.password)
				this.errors.password = validPassword.error
				if (this.valid) {
					this.valid = validPassword.valid
				}

				if (this.valid) {
					alert('HURRAAYYY!! :-)\n\n' + JSON.stringify(this.user))
				}
			}
		},
		mounted() {
		}
	}
</script>