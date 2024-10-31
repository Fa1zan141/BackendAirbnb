const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Listing = require('../models/Listing');

// GET all listings or filtered listings
router.get('/', async (req, res) => {
  const { location, property_type, bedrooms } = req.query;
  console.log("Filters received:", location, property_type, bedrooms);
  
  let query = {};
  if (location) query['address.market'] = location;
  if (property_type) query['property_type'] = property_type;
  if (bedrooms) query['bedrooms'] = parseInt(bedrooms);
  
  console.log("MongoDB query:", query);

  try {
    const listings = await Listing.find(query).limit(12); // Set limit to 12
    console.log("Listings found:", listings);
    
    res.json(listings);
  } catch (err) {
    console.error("Error fetching listings:", err.message);
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


// Get listing by ID
router.get('/:listingId', async (req, res) => {
  try {
    const { listingId } = req.params;
    
    // Find the listing that contains the specified listing_id in its reviews array
    const listing = await Listing.findOne({ 'reviews.listing_id': listingId });

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    
    res.json(listing);
  } catch (error) {
    console.error('Error fetching listing:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


/*
router.get('/:id', async (req, res) => {
  try {
      const { id } = req.params; 
      
      // Validate ObjectId format
      if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).json({ message: 'Invalid ObjectId format' });
      }

      const listing = await Listing.findById(id); 
      if (!listing) {
          return res.status(404).json({ message: 'Listing not found' });
      }
      res.json(listing);
  } catch (error) {
      console.error('Error fetching listing:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
  }
});
*/

module.exports = router;
