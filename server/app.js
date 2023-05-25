const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 5000;
require('dotenv').config()
const routeRepas = require('./routes/routesRepas');
const cors = require("cors");

app.use(express.json());

try{
  mongoose.connect(process.env.LIEN_MONGO, { useNewUrlParser: true})
  .then(()=>{
    app.listen(port);
    console.log('MongoDB Connecté');
  })
}
catch{
  console.error();
}

app.use('/api/repas', routeRepas);

app.get('/', function (req, res) {
  res.send('Hello World');
})

