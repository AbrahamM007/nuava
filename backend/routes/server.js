// Import dependencies
require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize express app
const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors()); // Enable CORS for cross-origin requests

// MongoDB connection using Mongoose
const uri = process.env.MONGO_URI; // Get the MongoDB URI from .env file
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a User model for the example (optional)
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

// Routes
// Simple route to check server status
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Route to handle user login (example route)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }
    
    // In a real-world application, you'd compare the hashed password
    if (password === user.password) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.status(400).json({ success: false, message: 'Incorrect password' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

// Route to handle user registration (example route)
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Registration failed', error: err.message });
  }
});

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
