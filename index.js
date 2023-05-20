// Import required modules
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Create a person schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

// Create a person model
const Person = mongoose.model('Person', personSchema);

// Create and save a record
const createAndSavePerson = (done) => {
    const person = new Person({
      name: 'John Doe',
      age: 30,
      favoriteFoods: ['Pizza', 'Burger']
    });
  
    person.save(function(err, data) {
      if (err) return console.error(err);
      done(null, data);
    });
  };
  