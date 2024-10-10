const express = require('express');
const router = express.Router();

// Define routes
router.get('/assignments', (req, res) => {
  res.send('View assignments');
});
router.post('/assignments/:id/accept', (req, res) => {
  res.send('Assignment accepted');
});

module.exports = router; // Export the router instance
