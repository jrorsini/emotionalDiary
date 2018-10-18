const mongoose = require('mongoose');
const keys = require('./keys');

mongoose
	.connect(
		keys.mongoURI,
		{ useNewUrlParser: true }
	)
	.then((arg1, arg2) => {})
	.catch(err => console.log(err));
