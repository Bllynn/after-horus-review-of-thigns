require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const port = 8080;

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
  console.log('tubuskus');
  app.set('db', db);
});

app.listen(port, () => {
  console.log(`My marathon time is ${port}`);
});
