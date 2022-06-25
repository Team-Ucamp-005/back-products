const ProductModel = require('../models/products');


const getProducts = async () => {
  return ProductModel.find({})
}

const createProduct = async (body) => {
  const newProduct = new ProductModel(body)
  await newProduct.save()
  return newProduct
}



module.exports = {
  getProducts,
  createProduct
}