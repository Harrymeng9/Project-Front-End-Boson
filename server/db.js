const mongoose = require("mongoose");

// Establish a connection to MongoDB
mongoose.connect('mongodb://localhost/fec');

// Set up the schema and model
const ratingSchema = mongoose.Schema({
  // Add data later
  sort: String

});

const Rating = mongoose.model('Rating', ratingSchema);
