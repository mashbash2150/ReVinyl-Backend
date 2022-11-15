const Router = require('express').Router()
const controller = require('../controllers/VinylController')


Router.get('/',controller.GetAllVinyls)
Router.get('/:vinyl_id',controller.GetVinylDetails)
Router.get('/:user_id',controller.GetUserVinyls)
Router.post('/create/:user_id',controller.CreateVinyl)
Router.put('/:vinyl_id',controller.UpdateVinyl)
Router.delete('/:vinyl_id',controller.DeleteVinyl)
// Implement these routes
module.exports = Router
