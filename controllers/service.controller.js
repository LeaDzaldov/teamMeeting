const serviceService = require('../services/service.service');

const addService = async (req, res) => {
    try {
        const data = req.body;
        const newSrvice = await serviceService.addService(data);
        res.status(201).json(newSrvice);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getServices = async (req, res) => {
    try {
        const services = await serviceService.getServices();
        res.status(200).json(services);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getService = async (req, res) => {
    try {
        const ServiceId = req.params.id;
        const service = await serviceService.getService(ServiceId);
        res.status(200).json(service);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const newservice = req.body;
        const service = await serviceService.updateService(serviceId, newservice);
        res.status(200).json(service);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const deleteService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const service = await serviceService.deleteService(serviceId);
        res.status(200).json(service);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    addService,
    getServices,
    getService,
    updateService,
    deleteService
};