const businessModel = require("../models/business.model");

const addEvent = async (newEvent) => {
    try {
        const event = new businessModel(newEvent);
        return await event.save();
    }
    catch (error) {
        console.error('Error adding business:', error);
        throw new Error('Failed to add business.');
    }
};

const getEvents = async () => {
    try {
        const events = await businessModel.find().exec();
        return events;
    } catch (error) {
        console.error('Error getting business:', error);
        throw new Error('Failed to get business.');
    }
};

const getEventId = async (id) => {
    try {
        const event = await businessModel.findById(id).exec();
        if (!event) {
            throw new Error('Business not found');
        }
        return event;
    } catch (error) {
        console.error('Error getting business by ID:', error);
        throw new Error('Failed to get business by ID.');
    }
};

const updateEvenet = async (id, updateData) => {
    try {
        const event = await businessModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
        if (!event) {
            throw new Error('Business not found');
        }
        return event;
    } catch (error) {
        console.error('Error updating business by ID:', error);
        throw new Error('Failed to update business by ID.');
    }
};

const deleteEvenet = async (id) => {
    try {
        const event = await businessModel.findById(id).exec();
        if (!event) {
            throw new Error('Business not found');
        }
        return businessModel.delete(event);
    } catch (error) {
        console.error('Error updating business by ID:', error);
        throw new Error('Failed to update business by ID.');
    }
};

module.exports = { addEvent, getEvents, getEventId, updateEvenet, deleteEvenet };