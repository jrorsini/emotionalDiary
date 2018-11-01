const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const keys = require('./keys');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

mongoose
	.connect(
		keys.mongoURI,
		{ useNewUrlParser: true }
	)
	.then(() => console.log('connected'))
	.catch(err => console.log(err));

const Users = mongoose.model('users', {
	email: String,
	emotions: Array,
	importantPeople: Array
});

app.post('/update_emotions/', ({ body }, res) =>
	Users.findOneAndUpdate({ email: 'test@test.com' }, { emotions: body }).then(
		emotion => {
			console.log(emotion);
			res.send('Your felt emotion has been saved.');
		}
	)
);

app.get('/emotions/', (req, res) => {
	Users.findOne({ email: 'test@test.com' }).then(user => res.send(user));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
