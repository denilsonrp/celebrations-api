const mongoose = require('mongoose')

const ReservesSchema = mongoose.Schema({
  celebration_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Celebrations'
  },
  name: {
    required: true,
    type: String
  },
})

module.exports = mongoose.model('Reserves', ReservesSchema)