const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true})
.then(()=>{
  app.listen(port);
  console.log('MongoDB Connecté');
})

app.get('/', function (req, res) {
  res.send('Hello World');
})
