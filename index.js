const mongoose = require('mongoose');
const keys = require('./keys');

mongoose
	.connect(keys.mongoURI)
	.then((arg1, arg2) => {})
	.catch(err => console.log(err));

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
