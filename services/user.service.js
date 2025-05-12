const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const createToken = require('../middleware/auth.middleware')

const addUser = async (newuser) => {
    try {
        // חיפוש משתמש לפי דוא"ל
        const user = await userModel.findOne({ email: newuser.email });
        if (user) {
            // אם המשתמש כבר קיים, זורקים שגיאה
            throw new Error('Email already exists');
        }

        // החלק הבא מבצע את ההצפנה של הסיסמה
        const hashPassword = await bcrypt.hash(newuser.password, 10);
        newuser.password = hashPassword;

        // יצירת אובייקט משתמש חדש
        const saveuser = new userModel(newuser);
        const savedUser = await saveuser.save();  // שומר את המשתמש ב-DB

        // אם השמירה הצליחה, אנחנו יוצרים טוקן
        const token = createToken(savedUser.id);  // משתמשים ב-ID של המשתמש ששמרנו

        // מחזירים את המשתמש והטוקן
        return { user: savedUser, token };
    } catch (error) {
        // הדפסת שגיאה בשרת
        console.error('Error adding user:', error);
        throw new Error('Failed to add user.');
    }
};



const getUsers = async () => {
    try {
        const users = await userModel.find().exec();
        return users;
    } catch (error) {
        console.error('Error getting business:', error);
        throw new Error('Failed to get business.');
    }
};

const getUser = async (id) => {
    try {
        const user = await userModel.findById(id).exec();
        if (!user) {
            throw new Error('Business not found');
        }
        return user;
    } catch (error) {
        console.error('Error getting business by ID:', error);
        throw new Error('Failed to get business by ID.');
    }
};

const updateUser = async (id, updateData) => {
    try {
        const user = await userModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
        if (!user) {
            throw new Error('Business not found');
        }
        return user;
    } catch (error) {
        console.error('Error updating business by ID:', error);
        throw new Error('Failed to update business by ID.');
    }
};

const deleteUser = async (id) => {
    try {
        const user = await userModel.findById(id).exec();
        if (!user) {
            throw new Error('Business not found');
        }
        return userModel.delete(service);
    } catch (error) {
        console.error('Error updating business by ID:', error);
        throw new Error('Failed to update business by ID.');
    }

};

module.exports = { addUser, getUsers, getUser, updateUser, deleteUser };