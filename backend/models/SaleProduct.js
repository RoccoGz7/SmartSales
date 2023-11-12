const { Schema, model } = require('mongoose')

const SaleProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: String, required: true }
})

module.exports = model('saleProduct', SaleProductSchema)