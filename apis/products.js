const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const { productsController } = require('../controllers');
const { getProducts, createProduct } = productsController


router.get('/', async (req, res) => {
  const products = await getProducts()
  res.send(products)
})

router.post('/', async (req, res) => {
  const body = req.body
  console.log(body)

  try {
    const newProduct = await createProduct(body)
    res.status(200)
    res.send(newProduct)
  } catch (error) {
    console.log(error)
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400)
      res.send({
        message: 'Error de validacion',
        reason: error.message
      })
      res.status(500)
      return res.send({
        error: error.message
      })
    }
  }
})


module.exports = router