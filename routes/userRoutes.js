const express = require('express');
const router = express.Router();

// Define routes
router.post('/register', (req, res) => {
  res.send('User registered');
});
router.post('/login', (req, res) => {
  res.send('User logged in');
});

module.exports = router; // Export the router instance
