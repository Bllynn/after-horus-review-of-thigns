require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller')

const port = 8080;

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING) //this connection string is all set up in the .env file located on root, from heroke DB info (add to git ignore so you dont push your secrets out there!)
.then(db => {
  app.set('db', db);
  app.listen(port, () => {
    console.log(`My marathon time is ${port}`);
  });
})
.catch(console.log)

app.get('/allFavorites', controller.getAll)//app.get wil go to /allFavorites and run the function getAll located on our controller.
app.get('/singleFavorite/:id', controller.getOne)//this will go to /singleFavorite/:id and run function getOne on the controller file.


