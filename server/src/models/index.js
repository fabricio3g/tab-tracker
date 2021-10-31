const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize') 
const config  = require('../config/config')


const db = {}




const sequelize  = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs.
    readdirSync(__dirname)
    .filter(file =>{
        
        if(file !== 'index.js'){
            return file
        }
        
    }
    )
    .forEach(file =>{
        
        const model = sequelize.define(path.join(__dirname, file))
        console.log(model)
        db[model.name] = model
    })


db.sequelize = sequelize
db.Sequalize = Sequelize


module.exports = db

