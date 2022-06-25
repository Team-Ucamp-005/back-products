const express = require('express');
// const mongoose = require('mongoose');
const router = express.Router();

const { productsController } = require('../controllers');
const { getProducts } = productsController


router.get('/', async (req, res) => {
  const products = await getProducts()
  res.send(products)
})


module.exports = router