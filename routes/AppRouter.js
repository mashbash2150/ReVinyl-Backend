const Router = require('express').Router()
const UserRouter = require('./AuthRouter')
const VinylRouter = require('./VinylRouter')
const LibraryRouter = require('./LibraryRouter')
Router.use('/', AuthRouter)
Router.use('/feed', VinylRouter)
Router.use('/library', LibraryRouter)
module.exports = Router