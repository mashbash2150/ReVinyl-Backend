const Router = require('express').Router()
const controller = require('../controllers/LibraryController')

Router.get('/:user_id', controller.GetLibrary)
Router.get('/:library_id', controller.GetLibraryDetails)
Router.get('/', controller.GetAllLibraries)
// Router.put('/:user_id/', controller.UpdateLibrary)
// Router.delete('/:library_id', controller.DeleteLibrary)

module.exports = Router