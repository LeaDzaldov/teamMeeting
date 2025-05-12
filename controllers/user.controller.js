const userService = require('../services/user.service');

const addUser = async (req, res) => {
    try {
        const data = req.body;



        const newuser = await userService.addUser(username, id, email, password, role);
        res.status(201).json(newuser);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUser = async (req, res) => {
    try {
        const UserId = req.params.id;
        const user = await userService.getUser(UserId);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const newuser = req.body;
        const user = await userService.updateUser(userId, newuser);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.deleteUser(userId);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};