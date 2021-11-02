const { User }  = require('../models')

module.exports  = {
    
    async register(req ,res){
       
        try{
            const user = await User.create({email: req.body.email, password: req.body.password})
            console.log(user.toJSON())
            res.send(user.toJSON())
        } catch(err){
            console.log(err)
            res.status(400).send({
                error: 'This email is already in use'
            })
        }
          
    },
    async login (req, res) {

        const {email , password} = req.body


        try{
            const user = await User.findOne({
                where:{
                    email:email
                }
            })

           
           
            if(!user){
                return res.status(403).send({
                    error: 'The login information was incorrent'
                })
            }
            
            const isPasswordIsValid = () =>{
                return password === user.password
            }

            

            if(!isPasswordIsValid()){
                
                return res.status(403).send({
                    error: 'The login information was incorrent'
                })
            }
           
           const userJson = user.toJSON()
           
            return res.send({
               user: userJson
            })
        } catch(err){
            console.log(err)
            res.status(500).send({
                error: 'An error has occured trying to login'
            })
        }
          
    }
}