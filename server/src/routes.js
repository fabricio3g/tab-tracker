const AutheticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicies = require('./policies/AuthenticationControllerPolicies')
const SongsController = require('./controllers/SongsControllers')
const BookmarkControllers = require('./controllers/BookmarkControllers')

module.exports = ( app ) => {
    app.post('/register', AuthenticationControllerPolicies.register, AutheticationController.register),
    app.post('/login', AutheticationController.login)
    app.get('/songs', SongsController.index)
    app.get('/songs/:songId', SongsController.show)
    app.post('/song-create', SongsController.post)
    app.put('/songs/:songId', SongsController.put)

    app.get('/bookmarks', BookmarkControllers.index)
    app.post('/bookmarks', BookmarkControllers.post)
    app.delete('/bookmarks', BookmarkControllers.delete)
}

