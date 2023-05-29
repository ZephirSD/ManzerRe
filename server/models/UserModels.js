const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    pseudo: String,
    image: String,
    id_user: {
        type: String,
        unique: true
    },
})

const User = mongoose.model('User', UserSchema)

module.exports = User