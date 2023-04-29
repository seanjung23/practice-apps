require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.post('/checkout', (req, res) => {
  let summaryData = req.body.summaryData;
  let currentSession = req.session_id;
  console.log('this summaryData: ', summaryData);
  console.log('this currentSession: ', typeof currentSession);
// ON DUPLICATE KEY name=(however you get your)
  db.queryAsync(
    `INSERT INTO RESPONSES (id, name, email, password, address, city, state, zipcode, phone, credit, exp, cvv, billingZipcode)
    VALUES ('${currentSession}', '${summaryData[0][0][1]}', '${summaryData[0][1][1]}', '${summaryData[0][2][1]}', '${summaryData[1][0][1]}', '${summaryData[1][1][1]}', '${summaryData[1][2][1]}', ${summaryData[1][3][1]}, ${summaryData[1][4][1]}, ${summaryData[2][0][1]}, '${summaryData[2][1][1]}', ${summaryData[2][2][1]}, ${summaryData[2][3][1]});`
    )
    .then((dataRes) => res.send(dataRes))
    .catch((err) => {
      console.log('error creating entry into database!: ', err);
      res.send(err);
    })
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
