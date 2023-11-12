const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

app.use('/api/products', require('./routes/products'))
app.use('/api/categories', require('./routes/categories'))
app.use('/api/saleproducts', require('./routes/saleProducts'))
app.use('/api/tables', require('./routes/tables'))
app.use('/delete', require('./routes/delete'))

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app