const Router = require('express').Router()
const controller = require('../controllers/VinylController')


Router.get('/',controller.GetAllVinyls)
Router.get('/:vinyl_id',controller.GetVinylDetails)
Router.get('/listings/:user_id',controller.GetUserVinyls)
Router.get('/status/sell',controller.GetSelling)
Router.get('/status/trade',controller.GetTrading)
Router.get('/status/wanted',controller.GetWanted)
Router.post('/create/:user_id',controller.CreateVinyl)
Router.put('/:vinyl_id',controller.UpdateVinyl)
Router.delete('/:vinyl_id',controller.DeleteVinyl)

module.exports = Router
