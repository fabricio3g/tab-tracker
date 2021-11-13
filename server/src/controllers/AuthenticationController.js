const { User }  = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const bcrypt = require('bcrypt')



const hashPassword = ( password ) =>{

    const SALT_ROUNDS = 10
    
    const salt =  bcrypt.genSaltSync(SALT_ROUNDS)
 
    const hash =  bcrypt.hashSync(password, salt)
    
    return hash
}


const jwtSignUser =  (user) =>{

    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret,{
        expiresIn: ONE_WEEK
    }) 

}


module.exports  = {
    
    async register(req ,res){

        
        try{
            const hash = hashPassword(req.body.password)
            const user = await User.create({email: req.body.email, password: hash})

            console.log('Register: ',user.toJSON())

            res.send(user.toJSON())
        } catch(err){
    
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
                return bcrypt.compareSync(password, user.password)
            }

            

            if(!isPasswordIsValid()){
                
                return res.status(403).send({
                    error: 'The login information was incorrent'
                })
            }
           
        
                const userJson = user.toJSON()
                console.log('Login: ', userJson)
                
            return res.send({
               user: userJson,
               token: jwtSignUser(userJson)
            })
        } catch(err){
            console.log(err)
            res.status(500).send({
                error: 'An error has occured trying to login'
            })
        }
          
    }
}