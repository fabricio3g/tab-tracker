const express = require('express');

const morgan = require('morgan')

const cors = require('cors')



const app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.post('/register', (req, res)=>{
    res.send('Hello, ' + req.body.email + '- pass: ' + req.body.password)

})


app.listen(5051)