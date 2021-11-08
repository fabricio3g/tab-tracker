const { Songs }  = require('../models')


module.exports  = {
    
    async index ( req ,res ){

        try{
          const song = await Songs.findAll({
              limit: 10
          })
          res.send(song)
        } catch(err){
            console.log(err)
            res.status(500).send({
                error: 'An error has occured trying to fetch the songs'
            })
        }
          
    },
    async show ( req ,res ){

        try{
          const song = await Songs.findByPk(req.params.songId)
          res.json(song)
        } catch(err){
            console.log(err)
            res.status(500).send({
                error: 'An error has occured trying to fetch the songs'
            })
        }
          
    },
    async post ( req ,res ){
        const {title, artist, genere, albumImage, youtubeId, lyric, tab, album} = req.body

        try{
          const song = await Songs.create({
            title,
            artist,
            genere,
            album,
            albumImage,
            youtubeId,
            lyric,
            tab
          })
          res.send(song)
        } catch(err){
            console.log(err)
            res.status(500).send({
                error: 'An error has occured trying to create the song'
            })
        }
          
    }

}