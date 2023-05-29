const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 5000;
require('dotenv').config()
const routeRepas = require('./routes/routesRepas');
const routeUser = require('./routes/routesUser');
const cors = require("cors");

app.use(cors());

app.use(express.json());

try{
  mongoose.connect(process.env.LIEN_MONGO_HOME, { useNewUrlParser: true})
  .then(()=>{
    app.listen(port);
    console.log('MongoDB Connecté');
  })
}
catch{
  console.error();
}

app.use('/api/repas', routeRepas);
app.use('/api/user',routeUser);

app.get('/', function (req, res) {
  res.send('Hello World');
})

