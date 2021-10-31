const Joi = require('joi')


module.exports = {
    register(req, res, next){

        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$'))
        })

        const {error , value } = schema.validate({email: req.body.email, password: req.body.password})


        

        next()
    }
}
