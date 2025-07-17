🧠 AI-DataStrategist
AI-DataStrategist is a full-stack web application for secure user registration, powered by:

✅ React  + Zod + React Hook Form + axios + Tailwind (Frontend)

✅ Express.js + JWT + Zod + Bcrypt (Backend)

It includes strong form validation, secure password handling, and token-based authentication using JSON Web Tokens.

📦 Tech Stack
Layer	Stack
Frontend	React, TypeScript, Zod, Axios, Tailwind CSS
Form Handling	React Hook Form + Zod
Backend	Express.js, Zod, Bcrypt, JWT
Auth	JSON Web Token (JWT)

🚀 Features
🔐 Secure user registration

🧠 Schema validation using Zod (frontend + backend)

💾 Password hashing with Bcrypt

🔑 Token-based auth using JWT

☑️ Client-side form validation

📬 Simple protected route example

🌐 CORS-enabled API communication

🔧 Getting Started
📁 Clone the Repo
bash
Copy code
git clone https://github.com/edwardogheneochuko/AI-DataStrategist.git
cd AI-DataStrategist.git

💻 Frontend Setup
Install Dependencies
bash
Copy code
cd frontend
npm install
Run Frontend
bash
Copy code
npm run dev
The frontend runs at http://localhost:3000

🛠 Backend Setup
Install Dependencies
bash
Copy code
cd backend
npm install
Run Backend
bash
Copy code
node server.js
The backend runs at http://localhost:5000

📡 API Endpoints
✅ Register a User
POST /api/register

json
Copy code
{
  "fName": "John",
  "lName": "Doe",
  "email": "john@example.com",
  "age": 25,
  "password": "123456"
}
Response:

json
Copy code
{
  "message": "User registered successfully!",
  "token": "<jwt_token>",
  "user": {
    "id": 1,
    "fName": "John",
    "lName": "Doe",
    "email": "john@example.com"
  }
}
🔒 Protected Route
GET /api/profile

Headers:

http
Copy code
Authorization: Bearer <token>
🔐 Token Storage
JWT is stored in localStorage for demo purposes:

ts
Copy code
localStorage.setItem('token', token)
🧪 Validation Rules
Field	Rules
fName	Required, 2–30 characters
lName	Required, 2–30 characters
email	Valid email
age	Must be between 18 and 70
password	5–20 characters
cPassword	Must match password

📸 Screenshots
(Add form and token example screenshots here if available)

📁 Project Structure
bash
Copy code
frontend/
  └── App.js        # Registration form
backend/
  └── server.js       # Express backend
🤖 Author
Edward Ogheneochuko
🔗 LinkedIn — 📧 Email

📄 License
This project is licensed under the MIT License.

Would you like a GitHub repo structure with it (frontend/, backend/, etc.) or want a version with login + dashboard next?