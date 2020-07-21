const mongoose = require('mongoose')

const CelebrationsSchema = mongoose.Schema({
  date: {
    required: true,
    type: Date
  },
  date_end: {
    required: true,
    type: Date
  },
  church: {
    required: true,
    type: String
  },
  vacancies: {
    required: true,
    type: Number
  },
  vacancies_reserved: {
    required: true,
    type: Number
  }
})

module.exports = mongoose.model('Celebrations', CelebrationsSchema)