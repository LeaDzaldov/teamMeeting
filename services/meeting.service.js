const meetingModel = require("../models/meeting.model");

const addMeeting = async (newmeeting) => {
    try {
        const meet = new businessModel(newmeeting);
        return await meet.save();
    }
    catch (error) {
        console.error('Error adding business:', error);
        throw new Error('Failed to add business.');
    }
};

const getMeetings = async () => {
    try {
        const meetings = await businessModel.find().exec();
        return meetings;
    } catch (error) {
        console.error('Error getting business:', error);
        throw new Error('Failed to get business.');
    }
};

const getMeeting = async (id) => {
    try {
        const meet = await  meetingModel.findById(id).exec();
        if (!meet) {
            throw new Error('Business not found');
        }
        return meet;
    } catch (error) {
        console.error('Error getting business by ID:', error);
        throw new Error('Failed to get business by ID.');
    }
};

const updateMeeting = async (id, updateData) => {
    try {
        const meet = await meetingModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
        if (!meet) {
            throw new Error('Business not found');
        }
        return meet;
    } catch (error) {
        console.error('Error updating business by ID:', error);
        throw new Error('Failed to update business by ID.');
    }
};

const deleteMeeting = async (id ) => {
    try {
        const meet = await meetingModel.findById(id ).exec();
        if (!meet) {
            throw new Error('Business not found');
        }
        return meetingModel.delete(meet) ;
    } catch (error) {
        console.error('Error updating business by ID:', error);
        throw new Error('Failed to update business by ID.');
    }
};

module.exports = { addMeeting, getMeetings, getMeeting, updateMeeting ,deleteMeeting};