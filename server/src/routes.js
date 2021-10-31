

const AutheticationController = require('./controllers/AuthenticationController')
module.exports = ( app ) => {
    
    app.post('/register', AutheticationController.register)
}