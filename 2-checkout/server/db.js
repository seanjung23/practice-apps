const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  // // Expand this table definition as needed:
  // .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`))
  // .then(() => db.queryAsync(`USE ${process.env.DB_NAME}`))
  .then(() => db.queryAsync(`
    CREATE TABLE IF NOT EXISTS responses (
      id VARCHAR(64) NOT NULL PRIMARY KEY,
      name VARCHAR(64) NOT NULL,
      email VARCHAR(64) NOT NULL,
      password VARCHAR(64) NOT NULL,
      address VARCHAR(64) NOT NULL,
      city VARCHAR(64) NOT NULL,
      state VARCHAR(64) NOT NULL,
      zipcode INT(5) NOT NULL,
      phone VARCHAR(10) NOT NULL,
      credit VARCHAR(16) NOT NULL,
      exp VARCHAR(64) NOT NULL,
      cvv INT(4) NOT NULL,
      billingZipcode INT(5) NOT NULL
    )`))
  .catch((err) => console.log('did not create database: ', err));

module.exports = db;
