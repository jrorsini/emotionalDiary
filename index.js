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
	.then(() => {
		console.log('connected');
	})
	.catch(err => console.log(err));

const emotionSchema = new Schema({
	source: String,
	date: Date,
	location: String,
	kind: String,
	intensity: String
});

const User = mongoose.model('users', {
	email: String,
	emotions: [emotionSchema]
});

app.post('/update_emotions/', ({ body }, res) =>
	User.findOneAndUpdate({ email: 'test@test.com' }, { emotions: body }).then(
		emotion => {
			console.log(emotion);
			res.send('Your felt emotion has been saved.');
		}
	)
);

app.get('/emotions/', (req, res) => {
	User.findOne({ email: 'test@test.com' }, {});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// const emotion = new Emotion({
// 	source: '',
// 	date: '',
// 	location: '',
// 	kind: '',
// 	intensity: ''
// });

// emotion.save().then(arg => {
// 	console.log(arg);
// 	console.log('saved');
// });
