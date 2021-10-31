module.exports = ( app ) => {
    
    app.post('/register', (req, res)=>{
        res.send('Hello, ' + req.body.email + '- pass: ' + req.body.password)
    
    })


}