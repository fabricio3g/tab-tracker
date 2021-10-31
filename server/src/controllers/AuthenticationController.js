const { User }  = require('../models')

module.exports  = {
    
    async register(req ,res){
       
        try{
            const user = await User.create({email: req.body.email, passowrd: req.body.password})
            res.send(user.toJSON())
        }
        catch(err){
            res.status(400).send({
                error: 'This email is already in use'
            })
        }
        
        

        res.send('Hello, ' + req.body.email + '- pass: ' + req.body.password)
    
        
    }
}