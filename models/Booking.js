// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//   booking_id: Number,
//   listing_name: String,
//   arrival_date: Date,
//   departure_date: Date,
//   client: {
//     name: String,
//     email: String,
//     daytime_phone: String,
//     mobile: String,
//     postal_address: String,
//     home_address: String
//   },
//   deposit_paid: Number,
//   balance_due: Number,
//   balance_due_date: Date,
//   number_of_guests: Number,
//   guests: [
//     {
//       name: String,
//       age: Number
//     }
//   ]
// });

const mongoose = require('mongoose');

// Define the schema for bookings
const bookingSchema = new mongoose.Schema({}, { collection: 'bookings' });

module.exports = mongoose.model('Booking', bookingSchema);

