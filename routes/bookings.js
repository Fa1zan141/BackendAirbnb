const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST a new booking
router.post('/', async (req, res) => {
  const { booking_id, listing_name, arrival_date, departure_date, client, deposit_paid, balance_due, balance_due_date, number_of_guests, guests } = req.body;

  const newBooking = new Booking({
    booking_id,
    listing_name,
    arrival_date,
    departure_date,
    client,
    deposit_paid,
    balance_due,
    balance_due_date,
    number_of_guests,
    guests
  });

  try {
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
