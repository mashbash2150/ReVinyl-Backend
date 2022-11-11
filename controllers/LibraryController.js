const { User,Vinyl, Library } = require('../models')
const stringify = require('../utils')

const GetLibrary = async (req, res) => {
    try {

      const library=await User.findAll({
        include:[
          {
            model:Vinyl,
            as:'library',
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
    stringify(library)
    } catch (error) {
      throw error
      console.log(error)
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
  GetAllLibraries
}

