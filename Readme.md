# 🧑‍💼 Internship Platform – Connect, Learn & Grow! 🌱  
> A full-stack role-based internship management system built with ❤️ using Node.js, MongoDB, HTML/CSS, and JavaScript.

![GitHub Repo stars](https://img.shields.io/github/stars/Shristirajpoot/Debug_thugs?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/Shristirajpoot/Debug_thugs?color=brightgreen)
![Built with](https://img.shields.io/badge/Built%20with-Node.js%20%2B%20MongoDB-blue)

---


## 📌 Overview

The **Internship Platform** empowers interns and mentors to connect, manage profiles, and collaborate through a unified portal. It supports **authentication**, **role-based access**, **profile creation**, and more.

This project includes:

- 🖥️ A responsive frontend built with **HTML/CSS/JS**
- 🔧 A backend server using **Node.js, Express.js, and MongoDB**
- 🔐 Authentication with **JWT & bcrypt**
- 📁 Organized file structure for ease of use

---

## ✨ Features

### 👨‍🎓 Intern & 👩‍🏫 Mentor
- Profile creation & editing
- View assigned mentors or interns
- Dashboard with role-specific content

### 🔐 Authentication
- Register/Login functionality
- JWT-based session management
- Secure password hashing with bcrypt

### ⚙️ Admin Functionality (Planned)
- User management
- Internship assignments
- Analytics dashboard

---

## 🧩 Tech Stack

| Frontend       | Backend            | Database | Auth    | Tools          |
|----------------|--------------------|----------|---------|----------------|
| HTML, CSS, JS  | Node.js, Express.js| MongoDB  | JWT     | Axios, bcrypt  |

---

## 📁 Project Structure


```plaintext
Internship-Platform/
├── Login_page/               # Login page
├── Intern_profile.html       # Intern dashboard
├── Mentor_details.html       # Mentor dashboard
├── index.html                # Landing page
├── form.html / form.css / form.js  # Profile creation and styling
├── Server.js                 # Node.js backend entry
├── auth.js                   # JWT-based middleware
├── connection.js             # MongoDB connection config
├── User.js                   # Mongoose schema
├── login.js / Profile.js     # Frontend scripts
├── assets/                   # WebP and PNG images
```


## 🚀 Getting Started
### 🛠️ Backend Setup
```bash

npm install
```
Create a .env file and add:

```env
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```
Then start the server:

```bash
npm start
```
## 🌐 Frontend Access
Just open the HTML files in a browser (like index.html, Login_page, Intern_profile.html, etc.). You can enhance with React/TailwindCSS in the future.

## 🔗 API Endpoints

### Auth
- POST /api/auth/register: Register user

- POST /api/auth/login: Login user

### Profile
- GET /api/profile/me: Get current user profile

Note: Send Authorization: Bearer <JWT> in header
## 🧰 Tech Stack
- 🔧 Backend: Node.js, Express.js, MongoDB

- 🔐 Authentication: JWT, bcrypt.js

- 🌐 Frontend: HTML, CSS, JavaScript

- 📦 Database: MongoDB with Mongoose

## 🛠️ Future Features
- 🤝 Mentorship Matching Algorithm

- 💬 Real-time Chat using Socket.IO

- 💳 Payment Integration with Stripe/PayPal

- 📊 Data Analytics Dashboard


## 👩‍💻 Author
### Shristi Rajpoot
- 📧 Email: shristirajpoot369@gmail.com
- 🔗 GitHub: @Shristirajpoot

## 📄 License
This project is licensed under the MIT License.

### 🌟 If you liked this project, consider starring the repo and sharing it!
