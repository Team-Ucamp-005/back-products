const ProductModel = require('../models/products');


const getProducts = async () => {
  return ProductModel.find({})
}



module.exports = {
  getProducts
}