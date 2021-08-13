const express = require('express')
const parksRouter = express.Router()

const {getParks, newPark, getPark, removePark, changePark} = require('../controllers/parkController')
const {loginRequired} = require('../controllers/authController')

parksRouter.get('/', getParks)
parksRouter.get('/:id', getPark)
parksRouter.use(loginRequired)
parksRouter.post('/', newPark)
parksRouter.delete('/park/:id', removePark)
parksRouter.put('/park/:id', changePark)

module.exports = parksRouter