const Router = require('express').Router()
const controller = require('../controllers/LibraryController')

Router.get('/:user_id', controller.GetLibrary)
Router.get('/:library_id', controller.GetLibraryDetails)
Router.get('/', controller.GetAllLibraries)
Router.post('/:owner_id/:vinyl_id', controller.AddToLibrary)
Router.delete('/:owner_id/:vinyl_id', controller.DeleteFromLibrary)

module.exports = Router