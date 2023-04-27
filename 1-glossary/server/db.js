const mongoose = require("mongoose");
const { ObjectId } = require('mongodb');

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

  save: (word) => {
    return Word.create(word);
  },

  remove: (word) => {
    return Word.deleteOne({_id: ObjectId(word._id)});
  },

  update: (word) => {
    return Word.updateOne({_id: word._id}, {$set:{word: word.updatedWord, definition: word.updatedDefinition}});
  },

  search: (word) => {
    return Word.find(word);
  }
}

// 4. Import the models into any modules that need them

