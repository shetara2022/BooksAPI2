require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors({
    origin: '*'
}))

app.get('/', function (req, res, next) {
    res.json({msg: 'Welcome to All Things Books! This is CORS-enabled for all origins!'})
  })
// app.get('/', (req, res) => {
//     res.send('Welcome to All Things Books!')
// })

const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

app.use(express.json())

app.listen(3005, () => {
    console.log('Server Started');
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
        () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
    )
})
