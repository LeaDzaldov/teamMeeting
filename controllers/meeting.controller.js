const meetingService = require('../services/meeting.service');

const addMeeting = async (req, res) => {
    try {
        const data = req.body;
        const newMeeting = await meetingService.addMeeting(data);
        res.status(201).json(newMeeting);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getMeetings = async (req, res) => {
    try {
        const { sortBy = 'date', order = 'asc' } = req.query
        const meetings = await meetingService.getmeetings(sortBy, order);
        res.status(200).json(meetings);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getMeeting = async (req, res) => {
    try {
        const MeetingId = req.params.id;
        const meet = await meetingService.getMeeting(MeetingId);
        res.status(200).json(meet);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateMeeting = async (req, res) => {
    try {
        const meetId = req.params.id;
        const newmeet = req.body;
        const event = await meetingService.updateMeeting(meetId, newmeet);
        res.status(200).json(event);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const deleteMeeting = async (req, res) => {
    try {
        const meetId = req.params.idNumber;
        const event = await meetingService.deleteMeeting(meetId);
        res.status(200).json(event);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    addMeeting,
    getMeetings,
    getMeeting,
    updateMeeting,
    deleteMeeting
};