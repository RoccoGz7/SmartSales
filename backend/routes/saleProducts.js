const { Router } = require('express')

const router = Router()

const SaleProduct = require('../models/SaleProduct')

router.get('/', async (req, res) => {
    const saleProducts = await SaleProduct.find()
    res.json(saleProducts)
})

router.post('/', async (req, res) => {
    const { name, price, date } = req.body
    const saleProduct = await new SaleProduct({ name, price, date })
    saleProduct.save()
    res.send('Save Sale Porduct')
})

module.exports = router