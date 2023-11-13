const { Router } = require('express')

const router = Router()

const Product = require('../models/Product')

router.get('/', async (req, res) => {
    const products = await Product.find()
    res.json(products)
})

router.post('/', async (req, res) => {
    const { name, price, category, img } = req.body
    try {
        const product = new Product({ name, price, category, img })
        await product.save()
    }catch(e){console.log(e)}
    
    res.send('Save Product')
})

router.delete('/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.send('Remove Product')
})

router.put('/:id', async (req, res) => {
    const { price } = req.body
    await Product.findByIdAndUpdate(req.params.id, { $set: {price} })
    res.send('Save Edit Product')
})


module.exports = router