const {User} = require('../models')

module.exports  = {
    register(req ,res){
        
        

        res.send('Hello, ' + req.body.email + '- pass: ' + req.body.password)
    
        
    }
}