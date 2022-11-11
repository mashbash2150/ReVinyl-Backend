const Router = require('express').Router()
const controller = require('../controllers/LibraryController')

Router.get('/:library_id', controller.GetLibrary)
Router.get('/', controller.GetAllLibraries)
// Router.post('/user_id', controller.CreateLibrary)
// Router.put('/:library_id', controller.UpdateLibrary)
// Router.delete('/:library_id', controller.DeleteLibrary)

module.exports = Router