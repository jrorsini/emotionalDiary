const mongoose = require('mongoose');
const keys = require('./keys');

mongoose
	.connect(
		keys.mongoURI,
		{ useNewUrlParser: true }
	)
	.then(() => {
		console.log('connected');
	})
	.catch(err => console.log(err));
