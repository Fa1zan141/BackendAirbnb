
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  booking_id: { type: Number, required: true },
  listing_name: { type: String, required: true },
  arrival_date: { type: Date, required: true },
  departure_date: { type: Date, required: true },
  client: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    daytime_phone: { type: String },
    mobile: { type: String },
    postal_address: { type: String },
    home_address: { type: String }
  },
  deposit_paid: { type: Number, required: true },
  balance_due: { type: Number, required: true },
  balance_due_date: { type: Date, required: true },
  number_of_guests: { type: Number, required: true },
  guests: [
    {
      name: { type: String, required: true },
      age: { type: Number, required: true }
    }
  ]
}, { collection: 'bookings' });

module.exports = mongoose.model('Booking', bookingSchema);
