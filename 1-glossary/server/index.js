require("dotenv").config();
const express = require("express");
const path = require("path");
const { getAll, save } = require('./db');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

const glossary = [
  { word: 'mendicant', definition: 'a pauper who lives by begging.' },
  { word: 'meretricious', definition: 'tastelessly showy.' },
  { word: 'vitiate', definition: 'make imperfect.' },
  { word: 'vapid', definition: 'lacking significance or liveliness.' },
];

app.post('/words', (req, res) => {
  console.log(req.body);
  // save(req.body)
  res.sendStatus(201);
});

app.get('/words', (req, res) => {
  getAll()
    .then((wordData) => {
      console.log('successfully retrieved words: ', wordData);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('there was an error getting words: ', err);
    })
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
