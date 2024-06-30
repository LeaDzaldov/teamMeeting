const userModel = require("../models/user.model");

const addUser = async (newuser) => {
    try {
        const user = new  userModel(newuser);
        return await user.save();
    }
    catch (error) {
        console.error('Error adding business:', error);
        throw new Error('Failed to add business.');
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
        const user = await userModel .findById(id).exec();
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

const  deleteUser = async (id ) => {
    try {
        const user = await userModel.findById(id ).exec();
        if (!user) {
            throw new Error('Business not found');
        }
        return userModel.delete(service) ;
    } catch (error) {
        console.error('Error updating business by ID:', error);
        throw new Error('Failed to update business by ID.');
    }
};

module.exports = { addUser, getUsers, getUser, updateUser ,deleteUser};