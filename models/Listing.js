// const mongoose = require('mongoose');

// const listingSchema = new mongoose.Schema({
//   _id: String,
//   name: String,
//   summary: String,
//   property_type: String,
//   bedrooms: Number,
//   price: Number,
//   review_scores: {
//     review_scores_rating: Number
//   },
//   address: {
//     market: String
//   }
// });

// module.exports = mongoose.model('listingsAndReviews', listingSchema);
const mongoose = require('mongoose');

// Define the schema for listings
const listingSchema = new mongoose.Schema({}, { collection: 'listingsAndReviews' });

module.exports = mongoose.model('Listing', listingSchema);
