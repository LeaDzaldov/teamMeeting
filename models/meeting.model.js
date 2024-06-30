const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const meetingSchema = new Schema({
    Id: { type: Number },
    userId: { type: Number },
    packageId: { type: [orderFood]},
    numPerson:{type:Number},
    timeMeetingStart:{type:String},
    timeMeetingEnd:{type:String},
    date: Date,
    hourOrder:{type:hourOrder}
});

const meetingModel = mongoose.models.Meeting || model('meeting', meetingSchema);

module.exports = meetingModel;