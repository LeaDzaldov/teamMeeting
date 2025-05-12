const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const meetingSchema = new Schema({
    title: String,
    idNumber: Number,
    id: Number,
    date: Date,
    participants: [String],
});

const meetingModel = mongoose.models.Meeting || model('meeting', meetingSchema);

module.exports = meetingModel;