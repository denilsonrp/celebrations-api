const ReservesSchema = require('../models/ReservesSchema')
const CelebrationsSchema = require('../models/CelebrationsSchema')

const create = async (data) => {
  const reserve = await ReservesSchema.create(data)
  
  // TODO: ADICIONAR DATA E HORA DA RESERVA

  await CelebrationsSchema.updateOne({ _id: data.celebration_id }, { $inc: { vacancies_reserved: 1 } })

  return reserve
}

module.exports = { create }