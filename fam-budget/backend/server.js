const express = require('express');//xx
const dbConfig = require('./config/dbConfig');//
const mongoose = require('mongoose');//
const port = 8080


// mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});
require ('./models/posts.model')
require ('./models/earnings.model')

const app = require('./app')


app.listen(port , ()=>{console.log('Connected to the port ' + port)})
