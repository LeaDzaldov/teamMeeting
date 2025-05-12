const meetingModel = require("../models/meeting.model");

const addMeeting = async (newmeeting) => {

    try {
        // זמן התחלה וסיום של הפגישה החדשה (נניח שהיא נמשכת שעה)
        const startTime = new Date(newMeeting.date);  // הזמן בו הפגישה מתחילה
        const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);  // סיום הפגישה אחרי שעה

        // בדיקה אם יש פגישה קיימת בטווח הזמן הזה (כלומר בין startTime ל-endTime)
        const conflictingMeeting = await meetingModel.findOne({
            $or: [
                { // פגישה שמתחילה או נגמרת בתוך טווח הזמן
                    date: { $gte: startTime, $lt: endTime }
                },
                { // פגישה שמתחילה או נגמרת בתוך הזמן של הפגישה החדשה
                    date: { $gte: startTime, $lt: endTime }
                }
            ]
        });

        if (conflictingMeeting) {
            throw new Error('הפגישה לתאריך והשעה המבוקשים כבר תפוסה.');
        }


        const meet = new businessModel(newmeeting);
        return await meet.save();
    }
    catch (error) {
        console.error('Error adding business:', error);
        throw new Error('Failed to add business.');
    }
};

const getMeetings = async (sortBy = 'date', order = 'asc') => {
    try {
        const sortOrder = order === 'asc' ? 1 : -1; // 1 = עולה, -1 = יורד
        const sortObject = {};
        if (sortBy === 'date') {
            sortObject.date = sortOrder; // מיון לפי תאריך
        } else if (sortBy === 'name') {
            sortObject.participants = sortOrder; // מיון לפי שם הלקוח
        }

        const meeting = await businessModel.find().sort(sortObject).exec();
        return meeting;
    } catch (error) {
        console.error('Error getting business:', error);
        throw new Error('Failed to get business.');
    }
};

const getMeeting = async (id) => {
    try {
        const meet = await meetingModel.findById(id).exec();
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

const deleteMeeting = async (idNumber) => {
    try {
        const meet = await meetingModel.findById(idNumber).exec();
        if (!meet) {
            throw new Error('Business not found');
        }
        return meetingModel.delete(meet);
    } catch (error) {
        console.error('Error updating business by ID:', error);
        throw new Error('Failed to update business by ID.');
    }
};

module.exports = { addMeeting, getMeetings, getMeeting, updateMeeting, deleteMeeting };