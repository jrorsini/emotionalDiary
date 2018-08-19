var vm = new Vue({
	data: {
		a: 1
	},
	beforeCreated() {
		console.log('before being created, a is: ');
	},
	created() {
		console.log('a is: ' + this.a);
	}
});
