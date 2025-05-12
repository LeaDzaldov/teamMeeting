const express = require('express');
const userController = require('../controllers/user.controller');
const { checkAdminRole, authenticateToken } = require('../middleware/auth.middleware');

const router = express.Router();

/**
 * @swagger

 */

/**
 * @swagger

 */

/**
 * @swagger

 */
router.get('/', authenticateToken, checkAdminRole, userController.getUsers);

/**
 * @swagger
 *
 */
router.get('/:id', authenticateToken, checkAdminRole, userController.getUser);

/**
 * @swagger

 */
// router.post('/',  userController.addUser);
router.post('/', authenticateToken, checkAdminRole, userController.addUser);

/**
 * @swagger

 */
router.put('/:id', authenticateToken, checkAdminRole, userController.updateUser);
/**
 * @swagger

 */
router.delete('/:id', authenticateToken, checkAdminRole, userController.updateUser);

module.exports = router;
