// server.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const {db} = require('./config/db') // call the mongoose connection like this from config folder
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000 // call the port up here from the .env file 

// Middleware
app.use(cors());
app.use(express.json());


app.use(cors({
  origin: '*',
  credentials: 'true',
  allowHeaders: ['Content-Type', 'Authorization']
}))

app.get("/", (req,res) => [
  res.send("Hello World")
]); // this is the / directory for the server 

// MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err)); 

// Routes
app.use('/api/user', authRoutes); // api for user route

// Start server
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
app.listen(PORT, () => {
  db();
  console.log(`🚀 Server running on port ${PORT}`)
})
