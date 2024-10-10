# Assigment-Submissionfile-portal
1. Database Setup (MongoDB)
Install MongoDB locally or use MongoDB Atlas.
Create a database named assignmentPortal.
2. Dependencies
Install the required packages:
npm init -y
npm install express mongoose bcryptjs jsonwebtoken dotenv
assignment-submission-portal/
├── controllers/
│   ├── adminController.js
│   └── userController.js
├── models/
│   ├── Assignment.js
│   ├── User.js
├── routes/
│   ├── adminRoutes.js
│   └── userRoutes.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── db.js
├── app.js
└── server.js
