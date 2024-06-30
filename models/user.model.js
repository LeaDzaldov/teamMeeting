
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const userSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    password: { type: String },
    email: { type: String },
    address: { type: String },
    isAdmin:{ type:Boolean},
       
 
});

const userModel = mongoose.models.user || model('user', userSchema);

module.exports = userModel;