const { User,Vinyl, Library } = require('../models')

const GetLibrary = async (req, res) => {

    try {

      const library=await User.findByPk(req.params.user_id, {

        include:[
          {
            model:Vinyl,
            as:'cart',
            through:{attributes:[]}
          }
        ]
      })
    res.send(library)
    } catch (error) {
      throw error
      
  }
}

  

const GetLibraryDetails=async(req,res)=>{
  try{
    const library=await Library.findByPk(req.params.library_id) 
    res.send(library)
  } catch (error){
    throw error
  }
}

const GetAllLibraries = async (req, res) => {
  try {
      const libraries = await Library.findAll()
      res.send(libraries)
  } catch (error) {
      throw error
  }
}

const AddToLibrary = async (req, res) => {
  try {
    let owner_id= parseInt(req.params.owner_id);
    let vinyl_id = parseInt(req.params.vinyl_id);
    let body = {
      vinyl_id,
      owner_id,
      ...req.body
    }
    let newEntry = await Library.create(body)
    res.send(newEntry);
  } catch (error) {
    throw error;
  }
};

const DeleteFromLibrary = async (req, res) => {
  try {
    let ownerId= parseInt(req.params.owner_id);
    let vinylId = parseInt(req.params.vinyl_id);
    await Library.destroy({where:{owner_id:ownerId,vinyl_id:vinylId}})
    res.send({message:`Deleted vinyl id ${vinylId} from user ${ownerId}'s library`})
  } catch (error) {
    throw error;
  }
};


module.exports={
  GetLibrary,
  GetAllLibraries,
  GetLibraryDetails,
  AddToLibrary,
  DeleteFromLibrary
}

