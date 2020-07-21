const CelebrationsSchema = require('./../models/CelebrationsSchema')

const findOne = async ({ celebration_id }) => {
  const celebrations = await CelebrationsSchema.findOne({ _id: celebration_id })
  
  return celebrations
}

const findAvailable = async () => {
  const celebrations = await CelebrationsSchema.find({ date: { $gte: new Date() } })

  // TODO: ACRESCENTAR NA DATA ATUAL 2 HORAS PARA VALIDAÇÃO
  
  return celebrations
}

module.exports = { findOne, findAvailable }