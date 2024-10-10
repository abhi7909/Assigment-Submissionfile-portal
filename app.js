const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Ensure this is a Router instance
const adminRoutes = require('./routes/adminRoutes'); // Ensure this is a Router instance

const app = express();

app.use(express.json());

// Using routes
app.use('/api/users', userRoutes); // Ensure this is correct
app.use('/api/admins', adminRoutes); // Ensure this is correct

module.exports = app;

