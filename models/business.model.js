

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const businessSchema = new Schema({

    name: String,
    id: Number,
    services: String,
    address: String,
});


const BusinessModel = mongoose.models.Business || model('businessModel', businessSchema);
module.exports = BusinessModel;