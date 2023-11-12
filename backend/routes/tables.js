const { Router } = require('express')

const router = Router()

const Table = require('../models/Table')

router.get('/', async (req, res) => {
    const tables = await Table.find()
    res.json(tables)
})

router.post('/', async (req, res) => {
    const state = 'disponible'
    const table = new Table({ state })
    await table.save()
    res.send('Save Table')
})

router.put('/:id', async (req, res) => {
    const { state } = req.body
    Table.findByIdAndUpdate(req.params.id, { $set: { state }})
    res.send('Save Edit Table')
})

module.exports = router