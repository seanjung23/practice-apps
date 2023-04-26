require("dotenv").config();
const express = require("express");
const path = require("path");

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

app.get('/getWords', (req, res) => {
  res.send(glossary);
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
