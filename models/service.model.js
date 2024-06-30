const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const serviceSchema = new Schema({
    Id: { type: Number },
    userId: { type: Number },
    packageId: { type: [orderFood]},
    numPerson:{type:Number},
    timeMeetingStart:{type:String},
    timeMeetingEnd:{type:String},
    date: Date,
    hourOrder:{type:hourOrder}
});

const serviceModel = mongoose.models.service || model('service', serviceSchema);

module.exports = serviceModel;