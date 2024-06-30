const businessService = require('../services/business.service');

const addEvent = async (req, res) => {
    try {
        const data = req.body;
        const newEvent = await businessService.addEvent(data);
        res.status(201).json(newEvent);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getEvents = async (req, res) => {
    try {
        const events = await businessService.getEvents();
        res.status(200).json(events);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const event = await businessService.getEventId(eventId);
        res.status(200).json(event);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateEvenet = async (req, res) => {
    try {
        const eventId = req.params.id;
        const newEvent = req.body;
        const event = await businessService.updateEvenet(eventId, newEvent);
        res.status(200).json(event);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const event = await businessService.deleteEvent(eventId);
        res.status(200).json(event);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {
    addEvent,
    getEvents,
    getEvent,
    updateEvenet,
    deleteEvent
};