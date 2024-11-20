Internship Platform (Frontend & Backend)
This repository contains both the Frontend and Backend of the Internship Platform. The platform is designed to manage internships, mentor profiles, and user authentication with role-based access (interns, mentors, admins).

Frontend: A responsive web application built with React and TailwindCSS.
Backend: A RESTful API built using Node.js, Express.js, and MongoDB.
Features
Frontend
Responsive UI: Built using React and styled with TailwindCSS.
User Authentication: Login, Register, and role-based access to different views (intern, mentor, admin).
Internship Profiles: Interns can view and create internship profiles.
Mentor Profiles: Mentors can create and update their profiles.
Interactive UI: Includes forms, buttons, and modals to interact with the backend.
Backend
User Authentication: Register, login, and JWT-based secure authentication.
Profile Management: Interns and mentors can manage their profiles.
Role-Based Access Control: Different access for admin, mentor, and intern roles.
MongoDB Integration: Data storage for users, internships, and mentor profiles.
Technologies Used
Frontend:
React: For building the user interface.
TailwindCSS: For styling the application.
Axios: For making HTTP requests to the backend API.
Backend:
Node.js: JavaScript runtime for the server.
Express.js: Web framework for building RESTful APIs.
MongoDB: NoSQL database for storing user data, internship, and mentor profiles.
JWT: JSON Web Tokens for secure user authentication.
bcrypt.js: For hashing passwords.
Setup Instructions
1. Clone the repository
bash
Copy code
git clone https://github.com/yourusername/internship-platform.git
cd internship-platform
2. Backend Setup
Navigate to the backend folder
bash
Copy code
cd backend
Install Backend Dependencies
Make sure Node.js is installed, then install the required packages.

bash
Copy code
npm install
Setup Environment Variables
Create a .env file in the backend directory and add the following variables:

plaintext
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
MONGO_URI: Your MongoDB connection string (from MongoDB Atlas or local MongoDB instance).
JWT_SECRET: Secret key used for JWT token signing and verification.
PORT: The port on which the backend will run (e.g., 5000).
Start the Backend Server
bash
Copy code
npm start
The backend will be running on http://localhost:5000.

3. Frontend Setup
Navigate to the frontend folder
bash
Copy code
cd frontend
Install Frontend Dependencies
Make sure Node.js is installed, then install the required packages.

bash
Copy code
npm install
Set up Axios Configuration
You might need to configure Axios in the frontend to point to the correct backend URL. This can be done in src/utils/axios.js.

javascript
Copy code
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
});
Start the Frontend Server
bash
Copy code
npm start
The frontend will be running on http://localhost:3000.

API Endpoints
User Authentication
POST /api/auth/register:

Registers a new user.
Request Body: { name, email, password, role }
Response: 201 status with user details.
POST /api/auth/login:

Logs in a user and returns a JWT token.
Request Body: { email, password }
Response: 200 status with JWT token.
User Profile
GET /api/profile/me:
Fetches the profile of the currently logged-in user.
Authorization: Bearer token required in the Authorization header.
Response: 200 status with user profile details.
Project Structure
Frontend
php
Copy code
frontend/
├── public/
│   ├── index.html
├── src/
│   ├── components/          # Reusable components
│   ├── pages/               # Page components (Login, Dashboard, Profile)
│   ├── utils/               # Axios and other utility functions
│   ├── App.js               # Main React component
│   ├── index.js             # React entry point
└── tailwind.config.js       # TailwindCSS configuration
Backend
bash
Copy code
backend/
├── config/
│   ├── db.js                # MongoDB connection
│   ├── passport.js          # JWT Passport configuration
├── middleware/
│   ├── auth.js              # JWT authentication middleware
├── models/
│   ├── User.js              # User model schema
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── profile.js           # Profile routes
├── server.js                # Entry point for the server
└── .env                     # Environment variables
Future Features
Mentorship Matching: Add an algorithm to match mentors with interns based on skills and interests.
Real-time Chat: Integrate Socket.IO to provide messaging functionality between interns and mentors.
Payment Integration: Add support for payment processing using services like Stripe or PayPal.
Data Analytics: Implement features to analyze user behavior and provide insights.
Contribution
Fork the repository.
Clone your fork.
Create a new branch for your changes.
Implement your feature or bug fix.
Create a pull request for review.
License
This project is licensed under the MIT License - see the LICENSE file for details
