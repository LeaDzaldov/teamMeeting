const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const meetingSchema = new Schema({
    title: String,
    date: Date,
    participants: [String],
});

const meetingModel = mongoose.models.Meeting || model('meeting', meetingSchema);

module.exports = meetingModel;