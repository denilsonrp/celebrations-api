const express = require('express')
const isPast = require('date-fns/isPast')

const routes = express.Router()

const CelebrationsRepository = require('./repositories/CelebrationsRepository')
const ReservesRepository = require('./repositories/ReservesRepository')

routes.get('/celebrations', async (request, response) => {
  const celebrations = await CelebrationsRepository.findAvailable()

  response.json(celebrations)
})

routes.post('/celebrations/reserve', async (request, response) => {
  try {
    const { celebration_id, person: { name } } = request.body

    const { vacancies, vacancies_reserved, date } = await CelebrationsRepository.findOne({ celebration_id })
    
    // TODO: VALIDAR ID DA CELEBRAÇÃO

    if (vacancies_reserved >= vacancies || isPast(date)) {
      throw new Error('As vagas já foram preenchidas')
    }

    const reserve = await ReservesRepository.create({ celebration_id, name })

    response.json(reserve)
  } catch(err) {
    return response.status(401).json({
      status: 'error',
      message: err.message,
    });
  }
})

module.exports = routes