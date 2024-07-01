
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const userSchema = new Schema({
    username: String,
    id: Number,
    email: String,
    password: String,
    role: String,


});

const userModel = mongoose.models.user || model('user', userSchema);

module.exports = userModel;