const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const serviceSchema = new Schema({
    name: String,
    cost: Number,
    id: Number
});

const serviceModel = mongoose.models.service || model('service', serviceSchema);

module.exports = serviceModel;