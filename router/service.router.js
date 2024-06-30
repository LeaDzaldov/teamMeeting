const express = require('express');
const serviceController = require('../controllers/service.controller');
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
router.get('/', authenticateToken, checkAdminRole, serviceController.getServices);

/**
 * @swagger
 *
 */
router.get('/:id', authenticateToken, checkAdminRole, serviceController.getService);

/**
 * @swagger

 */
router.post('/', authenticateToken, checkAdminRole, serviceController.addService);

/**
 * @swagger

 */
router.put('/:id', authenticateToken, checkAdminRole, serviceController.updateService);
/**
 * @swagger

 */
router.delete('/:id', authenticateToken, checkAdminRole, serviceController.deleteService);

module.exports = router;
