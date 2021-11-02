const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()



app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())


require('./routes')(app)



sequelize.sync()
.then(()=>{
        app.listen(config.port) 
    })
