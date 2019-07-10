// This will be the user profile model for our Mongo DB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rpg', { useNewUrlParser: true } )
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

const userProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: "A username is required!"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
            validate: [
                function(input) {
                return input.length >= 6;
                },
                "Password should be longer." 
                ]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "A valid e-mail request is required!"]
      },
    userCreated: {
        type: Date,
        default: Date.now
      },
})

const userProfile = mongoose.model("User", userProfileSchema)

module.exports = userProfile;