const mongoose = require('mongoose');
const keys = require('./keys');

mongoose.connect(keys.mongoURI);

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
