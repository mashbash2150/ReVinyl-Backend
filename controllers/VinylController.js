const {User, Vinyl}= require('../models')

const GetAllVinyls = async (req, res) => {
    try {
        const vinyls = await Vinyl.findAll()
        res.send(vinyls)
    } catch (error) {
        throw error
    } 
}

const GetVinylDetails = async (req, res) => {
  try {
      const vinyls = await Vinyl.findByPk(req.params.vinyl_id)
      res.send(vinyls)
  } catch (error) {
      throw error
  } 
}

const CreateVinyl = async (req, res) => {
  try {
    let ownerId=parseInt(req.params.user_id)
    let vinylBody={
      ownerId,
      ...req.body
    }
      const newVinyl = await Vinyl.create(vinylBody)
      res.send(newVinyl)
  } catch (error) {
      throw error
  } 
}


const UpdateVinyl = async (req, res) => {
  try {
      const vinyls = await Vinyl.findAll()
      res.send(vinyls)
  } catch (error) {
      throw error
  } 
}

const DeleteVinyl = async (req, res) => {
  try {
      const vinyls = await Vinyl.findAll()
      res.send(vinyls)
  } catch (error) {
      throw error
  } 
}

module.exports = {
    GetAllVinyls,
    GetVinylDetails,
    CreateVinyl,
    UpdateVinyl,
    DeleteVinyl
}