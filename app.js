const express = require('express');
const connection = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
connection();


// Routes
const listingRoutes = require('./routes/listings');
const bookingRoutes = require('./routes/bookings');

app.use('/api/listings', listingRoutes);
app.use('/api/bookings', bookingRoutes);

// Listen to server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
