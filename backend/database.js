const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI || 'mongodb://localhost/smart-sales'

mongoose.connect(URI, {
    useNewUrlParser: true
})
    .then(() => { console.log('database is connected') })
    .catch((error) => { console.log(error) })