const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))