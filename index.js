const express = require('express');
const mongoose = require('mongoose');
const keys = require('./keys');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.post('/update_emotions/', (req, res) => {
	console.log(req.body);
});

mongoose
	.connect(
		keys.mongoURI,
		{ useNewUrlParser: true }
	)
	.then(() => {
		console.log('connected');
	})
	.catch(err => console.log(err));

const Emotion = mongoose.model('Emotion', {
	source: String,
	date: Date,
	location: String,
	kind: String,
	intensity: String
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
