const { Library } = require('../models')

const GetLibrary = async (req, res) => {
    try {
        const libraries = await Library.findByPk(req.params.library_id, {
            include: [{ model: Vinyl, as: 'vinyls', attributes: ['artist', 'genre'] }]
        })
        res.send(libraries)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetLibrary
}

