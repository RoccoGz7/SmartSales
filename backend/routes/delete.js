const { Router } = require('express')

const router = Router()

const Category = require('../models/Category')
const Product = require('../models/Product')
const SaleProduct = require('../models/SaleProduct')
const Table = require('../models/Table')


router.delete('/', async (req, res) => {
    await Category.deleteMany()
    await Product.deleteMany()
    await SaleProduct.deleteMany()
    await Table.deleteMany()
    res.send('Database is delete')
})

module.exports = router