const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    img: { type: String, required: false },
})

module.exports = model('product', ProductSchema)