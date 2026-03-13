// =============================================
// controllers/contactController.js
// Handles the logic for /api/contact
// =============================================

const fs = require('fs');
const path = require('path');

// Path to our messages JSON "database"
const dataPath = path.join(__dirname, '../data/messages.json');

// ── POST /api/contact ─────────────────────────
// Saves a new contact message
const submitContact = (req, res) => {
  try {
    // 1. Get data sent from the frontend form
    const { name, email, message } = req.body;

    // 2. Validate — make sure all fields are filled
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message.',
      });
    }

    // 3. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    // 4. Read existing messages from JSON file
    const fileData = fs.readFileSync(dataPath, 'utf-8');
    const messages = JSON.parse(fileData);

    // 5. Create new message object with timestamp
    const newMessage = {
      id: Date.now(), // Simple unique ID using timestamp
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    };

    // 6. Add new message to the list
    messages.push(newMessage);

    // 7. Save updated list back to JSON file
    fs.writeFileSync(dataPath, JSON.stringify(messages, null, 2));

    // 8. Send success response to frontend
    res.status(201).json({
      success: true,
      message: `Thanks ${name}! Your message has been received. We'll get back to you soon.`,
      data: newMessage,
    });

  } catch (error) {
    console.error('Error saving contact message:', error.message);
    res.status(500).json({
      success: false,
      error: 'Something went wrong. Please try again later.',
    });
  }
};

// ── GET /api/contact ──────────────────────────
// Returns all messages (admin use only in production)
const getAllMessages = (req, res) => {
  try {
    const fileData = fs.readFileSync(dataPath, 'utf-8');
    const messages = JSON.parse(fileData);

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
};

module.exports = { submitContact, getAllMessages };
