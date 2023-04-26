const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary');

// 2. Set up any schema and models needed by the app
const wordSchema = mongoose.Schema({
  word: String,
  definition: String
});

const Word = mongoose.model('Word', wordSchema);

// 3. Export the models
module.exports = {
  getAll: () => {
    return Word.find({});
  },

  save: (words) => {
    return Word.insertMany(words);
  }
}

// 4. Import the models into any modules that need them

