const mongoose = require("mongoose");

// Establish a connection to MongoDB
mongoose.connect('mongodb://localhost/fec');

//mongoDB Atlas connection string with a dummy password:
/*
mongoose.connect('mongodb+srv://Ghasb001:HACKreactor_2209@clusterfec.bp6a2qd.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('db connected')
})
.catch((err) => {
  console.log('Error', err)
})
*/

// Set up the schema and model
const ratingSchema = mongoose.Schema({
  // Add data later
  sort: String

});

const Rating = mongoose.model('Rating', ratingSchema);
