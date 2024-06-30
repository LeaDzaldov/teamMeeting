const express = require('express');
const meetingController = require('../controllers/meeting.controller');
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
router.get('/', authenticateToken, checkAdminRole, meetingController.getMeetings);

/**
 * @swagger
 *
 */
router.get('/:id', authenticateToken, checkAdminRole, meetingController.getMeeting);

/**
 * @swagger

 */
router.post('/', authenticateToken, checkAdminRole, meetingController.addMeeting);

/**
 * @swagger

 */
router.put('/:id', authenticateToken, checkAdminRole, meetingController.updateMeeting);
/**
 * @swagger

 */
router.delete('/:id', authenticateToken, checkAdminRole, meetingController.deleteMeeting);

module.exports = router;
