# 🏋️ Fitness Analytics Dashboard

A MERN stack project to track workouts, calories, and fitness progress.

## 🚀 Features
- User Authentication (JWT)
- Workout Tracking
- Calorie Analytics
- Secure APIs

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- React (coming soon)

## 📅 Daily Progress

- Day 1: Project setup and folder structure
- Day 2: User authentication (register/login)
- Day 3: JWT middleware
- Day 4: Workout APIs

## ⚙️ Installation

```bash
cd server
npm install
npm run dev


🚀 PHASE 1 – OVERALL WORKFLOW (SHORT)
🧱 1. Server Starts
dotenv loads .env → values go into process.env
Express app starts
MongoDB connects via Mongoose

👉 Now backend is ready to receive requests

📝 2. Register Flow (Signup)
Client sends request → /api/auth/register
Route → goes to controller
Controller:
Reads data (req.body)
Checks if user exists (DB)
Hashes password (bcrypt)
Saves user (MongoDB)
Response sent back

👉 User created in DB ✅

🔐 3. Login Flow
Client sends request → /api/auth/login
Route → controller
Controller:
Finds user (DB)
Compares password (bcrypt)
Generates token (JWT)
Sends { token, user }

👉 User authenticated ✅

🔑 4. What each tool does
Express → handles routes & APIs
Mongoose → talks to MongoDB
dotenv → loads secrets
bcrypt → secures passwords
JWT → gives login token

🔥 ONE LINE FLOW

Client → Route → Controller → Database → Response (with security using bcrypt + JWT)

💡 Super Simple Analogy
Register = Create account 🔐
Login = Verify + get access pass 🎟️
Token = ID card for future requests


🎯 Interview Answer (Short)
“In Phase 1, the client sends requests to Express routes, which are handled by controllers. Controllers interact with MongoDB via Mongoose, use bcrypt for password hashing, and JWT for authentication, then send responses back to the client.”