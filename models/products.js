const mongoose = require('mongoose');

const { Schema } = mongoose

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  sku: Number,
  price: Number
}, {
  versionKey: false,
  timestamps: true
})

const ProductModel = mongoose.model('products', productSchema)


module.exports = ProductModel
