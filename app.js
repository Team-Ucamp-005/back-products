const express = require('express');
const app = express();

const router = require('./apis');

app.get('/', (req, res) => {
  res.send({
    message: 'Hola mundo'
  })
})

app.use(express.json());
app.use(router);

module.exports = app