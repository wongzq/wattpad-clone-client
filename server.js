const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const { MONGODB_URI } = require('./config/keys')
const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())

// connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).catch(err => console.log(err))
mongoose.connection.on('connected', () => console.log(`MongoDB connection success`))
mongoose.connection.on('error', (err) => console.log(`MongoDB connection error:\n${err}`))

// routes

// listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})