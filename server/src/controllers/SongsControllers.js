const { Songs }  = require('../models')
const { Op } = require('sequelize')

module.exports  = {
    
    async index ( req ,res ){
        
      try{
        const search = req.query.search
        let songs = ''

        if(search){
            songs = await Songs.findAll({
                where: {
                  $or: [
                    'title', 'artist', 'genere', 'album'
                  ].map(key => ({
                    [key]: {
                      $like: `%${search}%`
                    }
                  }))
                }
              })

        }else {
          songs = await Songs.findAll({
            limit: 10
                })
         }
         res.send(songs)
        } catch(err){
            console.log(err)
            res.status(500).send({
                error: 'An error has occured trying to fetch the songs'
            })
        }
          
    },
    async show ( req ,res ){

        try{
          const song = await Songs.findById(req.params.songId)
          res.json(song)
        } catch(err){
            console.log(err)
            res.status(500).send({
                error: 'An error has occured trying to fetch the songs'
            })
        }
          
    },
    async post ( req ,res ){
        const {title, artist, genere, albumImage, youtubeId, lyric, tab, album, userId} = req.body

        try{
          const song = await Songs.create({
            title,
            artist,
            genere,
            album,
            albumImage,
            youtubeId,
            lyric,
            tab,
            userId
          })
          res.send(song)
        } catch(err){
            console.log(err)
            res.status(500).send({
                error: 'An error has occured trying to create the song'
            })
        }
          
    },
    async put ( req ,res ){
        console.log(req.body)
        console.log(req.body.id)
        try{
          await Songs.update(req.body,{ where:{
            id: req.body.id
          }})
          res.send(req.body)
        } catch(err){
            console.log(err)
            res.status(500).send({
                error: 'An error has occured trying to create the song'
            })
        }
          
    },
    async delete ( req ,res ){
      
      const { songId, userId } = req.query
        
  }

}