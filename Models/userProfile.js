// This will be the user profile model
const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
})

const UserProfile = mongoose.model("userProfile", userProfileSchema)

module.exports = UserProfile;