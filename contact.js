// =============================================
// routes/contact.js
// Defines URL patterns for /api/contact
// =============================================

const express = require('express');
const router = express.Router();

// Import the controller functions
const { submitContact, getAllMessages } = require('../controllers/contactController');

// POST /api/contact    → Submit a new contact message
router.post('/', submitContact);

// GET /api/contact     → View all messages (for admin/testing)
router.get('/', getAllMessages);

module.exports = router;
