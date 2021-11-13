const AutheticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicies = require('./policies/AuthenticationControllerPolicies')
const SongsController = require('./controllers/SongsControllers')
const BookmarkControllers = require('./controllers/BookmarkControllers')
const isAuthenticated = require('./policies/isAuthenticated')
module.exports = ( app ) => {
    app.post('/register', AuthenticationControllerPolicies.register, AutheticationController.register),
    app.post('/login', AutheticationController.login)
    app.get('/songs', SongsController.index)
    app.get('/songs/:songId', SongsController.show)
    app.post('/song-create' ,SongsController.post)
    app.put('/songs/:songId', isAuthenticated , SongsController.put)

    app.get('/bookmarks', isAuthenticated, BookmarkControllers.index)
    app.post('/bookmarks',BookmarkControllers.post)
    app.delete('/bookmarks', BookmarkControllers.delete)
}

