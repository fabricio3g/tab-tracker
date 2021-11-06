const AutheticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicies = require('./policies/AuthenticationControllerPolicies')
const SongsController = require('./controllers/SongsControllers')

module.exports = ( app ) => {
    app.post('/register', AuthenticationControllerPolicies.register ,AutheticationController.register),
    app.post('/login', AutheticationController.login)
    app.get('/songs', SongsController.index)
    app.post('/song-create', SongsController.post)
}

