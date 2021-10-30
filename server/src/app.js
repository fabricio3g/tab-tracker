const express = require('express');

const morgan = require('morgan')

const cors = require('cors')



const app = express()

app.use(morgan('combined'))
app.use(cors())


app.get('/status', (req, res)=>{

    res.send('Hello World')

})


app.listen(5051)