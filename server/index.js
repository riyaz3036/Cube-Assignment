const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const imageRoutes = require('./routes/ImageRoutes.js')

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());

// Middleware to serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Image routes
app.use('/api', imageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
