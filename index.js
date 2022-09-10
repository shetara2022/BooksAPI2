const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()


app.get('/', (req, res) => {
    res.send('Welcome to All Things Books!')
})

const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

app.use(express.json())

app.listen(3005, () => {
    console.log('Server Started');
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
        () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
    )
})
