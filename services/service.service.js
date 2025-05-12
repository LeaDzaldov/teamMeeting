const serviceModel = require("../models/service.model");

const addService = async (newservice) => {
    try {
        const service = new serviceModel(newservice);
        return await service.save();
    }
    catch (error) {
        console.error('Error adding business:', error);
        throw new Error('Failed to add business.');
    }
};

const getServices = async () => {
    try {
        const services = await serviceModel.find().exec();
        return services;
    } catch (error) {
        console.error('Error getting business:', error);
        throw new Error('Failed to get business.');
    }
};

const getService = async (id) => {
    try {
        const service = await serviceModel.findById(id).exec();
        if (!service) {
            throw new Error('Business not found');
        }
        return service;
    } catch (error) {
        console.error('Error getting business by ID:', error);
        throw new Error('Failed to get business by ID.');
    }
};

const updateService = async (id, updateData) => {
    try {
        const service = await serviceModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
        if (!service) {
            throw new Error('Business not found');
        }
        return service;
    } catch (error) {
        console.error('Error updating business by ID:', error);
        throw new Error('Failed to update business by ID.');
    }
};

const deleteService = async (id) => {
    try {
        const service = await serviceModel.findById(id).exec();
        if (!service) {
            throw new Error('Business not found');
        }
        return businessModel.delete(service);
    } catch (error) {
        console.error('Error updating business by ID:', error);
        throw new Error('Failed to update business by ID.');
    }
};

module.exports = { addService, getServices, getService, updateService, deleteService };