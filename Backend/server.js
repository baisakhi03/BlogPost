const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config.js/db');
const blogRoutes = require('./routes/blogs');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();


connectDB();


app.use(cors());
app.use(express.json());


app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
