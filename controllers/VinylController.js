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

const GetUserVinyls=async(req,res)=>{
  try {
    let ownerId= parseInt(req.params.owner_id);
    const vinyls = await Vinyl.findAll({where:{owner_id:ownerId}})
    res.send(vinyls)
  } catch (error) {
    throw error
  } 
  }




const CreateVinyl = async (req, res) => {
  try {
    let owner_id=parseInt(req.params.user_id)
    let vinylBody={
      owner_id,
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
    let vinylId=parseInt(req.params.vinyl_id)
    let updatedVinyl=await Vinyl.update(req.body,{
      where:{id:vinylId},
      returning:true
    })
    res.send(updatedVinyl)
  } catch (error) {
      throw error
  } 
}

const DeleteVinyl = async (req, res) => {
  try {
    let vinylId=parseInt(req.params.vinyl_id)
    await Vinyl.destroy({where:{id:vinylId}})
      res.send({message:`Deleted Vinyl with id of ${vinylId}`})
  } catch (error) {
      throw error
  } 
}

module.exports = {
    GetAllVinyls,
    GetVinylDetails,
    GetUserVinyls,
    CreateVinyl,
    UpdateVinyl,
    DeleteVinyl
}