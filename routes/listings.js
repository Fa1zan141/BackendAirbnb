const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// GET all listings or filtered listings
router.get('/', async (req, res) => {
  const { location, property_type, bedrooms } = req.query;

  let query = {};
  if (location) {
    query['address.market'] = location;
  }
  if (property_type) {
    query['property_type'] = property_type;
  }
  if (bedrooms) {
    query['bedrooms'] = parseInt(bedrooms);
  }

  try {
    const listings = await Listing.find(query).limit(10); // Adjust the limit as needed
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all distinct property types
router.get('/property-types', async (req, res) => {
  try {
    const propertyTypes = await Listing.distinct('property_type');
    res.json(propertyTypes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all distinct bedroom counts
router.get('/bedrooms', async (req, res) => {
  try {
    const bedrooms = await Listing.distinct('bedrooms');
    res.json(bedrooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
