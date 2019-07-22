// This will be the user profile model
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: "A username is required!"
    },
    password: {
        type: String,
        trim: true,
        required: "A password is required!",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Please provide a password that is longer than 6 characters!"
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
    methods: {
        checkPassword: function(inputPassword) { 
          return bcrypt.compareSync(inputPassword, this.password)
        },
        hashPassword: plainTextPassword => {
          return bcrypt.hashSync(plainTextPassword, 10)
        },
        pre: ('save', function(next) {
          if(!this.password) {
            console.log('Models/userProfile.js ===== NO PASSWORD PROVIDED ======')
            next();
          } else {
            console.log('Models/userProfile.js hashPassword in pre-save')
              this.password = this.hashPassword(this.password)
            next();
          }
        })
    }
})

const UserProfile = mongoose.model("userProfile", userProfileSchema)

module.exports = UserProfile;