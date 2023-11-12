const { Router } = require('express')

const router = Router()

const Category = require('../models/Category')

router.get('/', async (req, res) => {
    const categories = await Category.find()
    res.json(categories)
})

router.post('/', async (req, res) => {
    const { name } = req.body
    const category = new Category({ name })
    await category.save()
    res.send('Save Category')
})

module.exports = router