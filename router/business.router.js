const express = require('express');
const businessController = require('../controllers/business.controller');
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
router.get('/', authenticateToken, checkAdminRole, businessController.getEvents);

/**
 * @swagger
 *
 */
router.get('/:id', authenticateToken, checkAdminRole, businessController.getEvent);

/**
 * @swagger

 */
router.post('/', authenticateToken, checkAdminRole, businessController.addEvent);

/**
 * @swagger

 */
router.put('/:id', authenticateToken, checkAdminRole, businessController.updateEvenet);
/**
 * @swagger

 */
router.delete('/:id', authenticateToken, checkAdminRole, businessController.deleteEvent);
module.exports = router;
