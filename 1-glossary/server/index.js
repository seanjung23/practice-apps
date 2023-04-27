require("dotenv").config();
const express = require("express");
const path = require("path");
const { getAll, save } = require('./db');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// const glossary = [
//   { word: 'mendicant', definition: 'a pauper who lives by begging.' },
//   { word: 'meretricious', definition: 'tastelessly showy.' },
//   { word: 'vitiate', definition: 'make imperfect.' },
//   { word: 'vapid', definition: 'lacking significance or liveliness.' },
// ];

app.post('/glossary', (req, res) => {
  save(req.body)
    .then((wordsData)=> {
      console.log('successfully created new word entry!: ', wordsData);
      getAll()
        .then((newWordsData) => {
          res.send(newWordsData);
        })
        .catch((err) => {
          console.log('error retriving words while creating new entry!: ', err);
        })

    })
    .catch((err) => {
      console.log('there was an error creating new word entry!: ', err)
    })
});

app.get('/glossary', (req, res) => {
  getAll()
    .then((wordData) => {
      console.log('successfully retrieved words!: ', wordData);
      res.send(wordData);
    })
    .catch((err) => {
      console.log('there was an error retrieving words!: ', err);
    })
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
