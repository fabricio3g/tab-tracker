const Joi = require('joi')


module.exports = {
    async register(req, res, next){

        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$'))
        })

        const {error , value } = schema.validate({email: req.body.email, password: req.body.password})

        if(error !== undefined){
                switch(error.details[0].context.key){
                
                    case 'email':
                        res.status(400)
                            .send({
                                error: 'You must provide a valid email adress'
                            })
                        break
                    case 'password':
                        res.status(400)
                            .send({
                                error: 'You must provide a valid password'
                            })
                        break
                    default:
                        res.status(400)
                        .send({
                            error: 'Invalid registration information'
                        })
                        break

                }
        }
        else{
            console.log(value)
            await next()
        }

        
        
    }
}
