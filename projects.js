// =============================================
// routes/projects.js
// Defines URL patterns for /api/projects
// =============================================

const express = require('express');
const router = express.Router();

// Import the controller functions
const { getAllProjects, getProjectById } = require('../controllers/projectsController');

// GET /api/projects        → Get all projects
router.get('/', getAllProjects);

// GET /api/projects/:id    → Get one project by ID (e.g. /api/projects/1)
router.get('/:id', getProjectById);

module.exports = router;
