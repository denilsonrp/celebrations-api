const CelebrationsSchema = require('./../models/CelebrationsSchema')

const findOne = async ({ celebration_id }) => {
  const celebrations = await CelebrationsSchema.findOne({ _id: celebration_id })
  
  return celebrations
}

const findAvailable = async () => {
  const celebrations = await CelebrationsSchema.find({ date_end: { $gte: new Date() } })
  
  return celebrations
}

module.exports = { findOne, findAvailable }