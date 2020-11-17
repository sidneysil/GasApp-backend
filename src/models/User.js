const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        unique: true,
        type: String
    },
    telephone: String,
    provider: Boolean,

});

module.exports = mongoose.model('User', UserSchema);