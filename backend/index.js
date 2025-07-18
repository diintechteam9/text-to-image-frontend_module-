const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// to generate images
const generateImageRoute = require('./router/generateimage');



app.use('/api/image', generateImageRoute);
console.log("GOOGLE_APPLICATION_CREDENTIALS =", process.env.GOOGLE_APPLICATION_CREDENTIALS);


// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});