# 🔐 Password Reset System (MERN Stack)

A full-stack Password Reset application built using Node.js, Express, MongoDB Atlas, and React (Vite).

This project demonstrates secure user registration, password reset via email, token validation, and frontend-backend integration.

---

## 🚀 Features

- User Registration (bcrypt password hashing)
- Forgot Password (secure token generation using crypto)
- Token expiry (15 minutes)
- Email sending using Nodemailer (Gmail App Password)
- Reset password with token validation
- Token auto-clear after successful reset
- React frontend with routing
- MongoDB Atlas database integration

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcrypt
- crypto
- nodemailer
- dotenv

### Frontend
- React (Vite)
- Axios
- React Router DOM
- Bootstrap (UI)

---

## 📂 Project Structure

```
backend/
  Controllers/
  Models/
  Routes/
  server.js

frontend/
  src/
    pages/
      Register.jsx
      Forgot.jsx
      Reset.jsx
    App.jsx
    main.jsx
```

---

## ⚙️ Backend Environment Variables (.env)

```
PORT=4000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:5173
```

⚠️ Use Gmail App Password (not your real Gmail password).

---

## 🔌 Installation & Running the Project

### 1️⃣ Backend

```
cd backend
npm install
npm run dev
```

Runs on:
```
http://localhost:4000
```

---

### 2️⃣ Frontend

```
cd frontend
npm install
npm run dev
```

Runs on:
```
http://localhost:5173
```

---
DEPLOYMENT LINK : https://cerulean-frangollo-dfaf90.netlify.app/
## 🔐 API Endpoints

### Register
POST `/api/auth/register`

```
{
  "username": "testuser",
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

### Forgot Password
POST `/api/auth/forgot-password`

```
{
  "email": "test@gmail.com"
}
```
- NOW CHECK ON MONGODB ATLAS, YOU WILL GET A TOKEN.
- COPY AND PASTE ON THE BELOW LINK'S token AREA.
---

### Reset Password
POST `/api/auth/reset-password/:token`

```
{
  "password": "newpassword"
}
```
-NOW, YOUR PASSWORD RESET SUCCESSFULLY!
---

# 🧪 How You Can Test This Project

## Step 1: Start Backend
```
cd backend
npm run dev
```

## Step 2: Start Frontend
```
cd frontend
npm run dev
```

## Step 3: Open Browser
```
http://localhost:5173
```

### Testing Flow:

1. Register a new user
2. Click "Forgot Password"
3. Enter registered email
4. Check email for reset link
5. Click link (opens Reset page)
6. Enter new password
7. Password updated successfully

---

## 🔎 Testing Using Postman (Optional)

### Register
```
POST http://localhost:4000/api/auth/register
```

### Forgot Password
```
POST http://localhost:4000/api/auth/forgot-password
```

### Reset Password
```
POST http://localhost:4000/api/auth/reset-password/<token>
```

---

## 🔒 Security Highlights

- Passwords hashed with bcrypt
- Secure random reset token
- Token expiry validation
- Token removed after successful reset
- Environment variables for sensitive data

---

## 👩‍💻 Author
Kirisha Priya
