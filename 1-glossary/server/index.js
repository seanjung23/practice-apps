require("dotenv").config();
const express = require("express");
const path = require("path");
const { getAll, save, remove, update, search } = require('./db');

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

app.get('/Glossary', (req, res) => {
  getAll()
    .then((wordsData) => {
      res.send(wordsData);
    })
    .catch((err) => {
      console.log('error retrieving words from database!: ', err);
    })
});

app.post('/Search', (req, res) => {
  search(req.body)
    .then((wordsData) => {
      console.log(wordsData);
      res.send(wordsData);
    })
    .catch((err) => {
      console.log('error searching word in database!: ', err);
    })
});

app.post('/Glossary', (req, res) => {
  save(req.body)
    .then(()=> {
      getAll()
        .then((wordsData) => {
          res.send(wordsData);
        })
        .catch((err) => {
          console.log('error retrieving words from database!: ', err);
        })
    })
    .catch((err) => {
      console.log('error creating new word entry in database!: ', err)
    })
});

app.delete('/Glossary', (req, res) => {
  remove(req.body)
    .then(() => {
      getAll()
      .then((wordsData) => {
        res.send(wordsData);
      })
      .catch((err) => {
        console.log('error retrieving words from database!: ', err);
      })
    })
    .catch((err) => {
      console.log('error removing word entry from database!: ', err);
    })
});

app.patch('/Glossary', (req, res) => {
  update(req.body)
    .then(() => {
      getAll()
        .then((wordsData) => {
          res.send(wordsData);
        })
        .catch((err) => {
          console.log('error retrieving words from database!: ', err);
        })
    })
    .catch((err) => {
      console.log('error updating entry in database!: ', err);
    });
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
