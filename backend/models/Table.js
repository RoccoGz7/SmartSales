const { Schema, model } = require('mongoose')

const TableSchema = new Schema({
    state: { type: String, required: true },
})

module.exports = model('table', TableSchema)