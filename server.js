// =============================================
// server.js — Main entry point for the backend
// =============================================

// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Import routes
const projectRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');

// Create the Express app
const app = express();

// ── Middleware ──────────────────────────────
// Allow your frontend (Vercel) to talk to this backend
app.use(cors({
  origin: '*', // In production, replace * with your Vercel URL e.g. 'https://my-dev-app-project.vercel.app'
  methods: ['GET', 'POST'],
}));

// Parse incoming JSON request bodies
app.use(express.json());

// ── Routes ──────────────────────────────────
// Root health check — visit /api to confirm it's running
app.get('/api', (req, res) => {
  res.json({ message: '✅ Backend API is running!' });
});

// Mount the routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// ── 404 Handler ─────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ── Start Server ─────────────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
  console.log(`📡 Test it: http://localhost:${PORT}/api`);
});

// Export for Vercel serverless
module.exports = app;
