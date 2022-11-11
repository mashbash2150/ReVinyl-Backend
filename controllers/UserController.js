const { Vinyl, Library } = require('../models')

const Login = async (req, res) => {
    try {
        const user = await user.findOne({
            where: { email: req.body.email },
            raw: true
        })
        if (
            user && 
            (await middleware.comparePassword(user.passwordDigest, req.body.password))
        ) {
            let payload = {
                id: user.id,
                email: user.email
            }
            let token = middleware.createToken(payload)
            return res.send({ user: payload, token })
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized'})
    } catch (error) {
        throw error
    }
}





module.exports = {
    Login
}