// This will be the user profile model for our Mongo DB

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rpg', {useNewUrlParser: true} )

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const userProfile = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    date: { type: Date, default: Date.now }
})

module.exports = userProfile;