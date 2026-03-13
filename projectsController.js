// =============================================
// controllers/projectsController.js
// Handles the logic for /api/projects
// =============================================

const fs = require('fs');
const path = require('path');

// Path to our local JSON "database"
const dataPath = path.join(__dirname, '../data/projects.json');

// ── GET /api/projects ─────────────────────────
// Returns all projects
const getAllProjects = (req, res) => {
  try {
    // Read the JSON file
    const fileData = fs.readFileSync(dataPath, 'utf-8');
    const projects = JSON.parse(fileData);

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error('Error reading projects:', error.message);
    res.status(500).json({
      success: false,
      error: 'Could not fetch projects. Please try again.',
    });
  }
};

// ── GET /api/projects/:id ─────────────────────
// Returns a single project by ID
const getProjectById = (req, res) => {
  try {
    const fileData = fs.readFileSync(dataPath, 'utf-8');
    const projects = JSON.parse(fileData);

    // Find project matching the ID from the URL
    const project = projects.find(p => p.id === parseInt(req.params.id));

    if (!project) {
      return res.status(404).json({
        success: false,
        error: `Project with ID ${req.params.id} not found.`,
      });
    }

    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
};

module.exports = { getAllProjects, getProjectById };
