const { User,Vinyl, Library } = require('../models')
const stringify = require('../utils')

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
    //     const libraries = await Library.findByPk(req.params.library_id, {
    //         include: [{ model: Vinyl, as: 'vinyls', attributes: ['artist', 'genre'] }]
    //     })
    //     res.send(libraries)
    // } catch (error) {
    //     throw error
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



module.exports={
  GetLibrary,
  GetAllLibraries,
  GetLibraryDetails
}
