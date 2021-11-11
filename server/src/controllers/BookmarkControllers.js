const { Bookmark }  = require('../models')


module.exports  = {
    
    async index ( req ,res ){

      const { songId, userId } = req.query
      console.log(req.query)
      console.log('Book index is called')
      try{

        const bookmark = await Bookmark.findOne({
            where:{
                SongId: songId,
                UserId: userId
            }
        })
        
        res.send(bookmark)

      }catch(err){
        res.status(404).send({
          error: 'bookmark don\'t exit'
        })
      }
          
    },
    async post ( req ,res ){
      const {songId, userId} = req.body.params
      
      try{
        const bookmark = await Bookmark.findOne({
          where: {
            SongId: songId,
            UserId: userId
          }
        })
        console.log(bookmark)

        if(bookmark){
          console.log('YOu alredy have this bookmark')
          res.status(400).send({
            error: 'You already have this set as a bookmark'
          })
        }else {
          const bookmarkData = await Bookmark.create({
            SongId: songId,
            UserId: userId
          })
          console.log('New bookmark')
          res.send(bookmarkData)    
        }

                   

      }catch(err){
        res.status(505).send({
          error: 'Error has ocurred trying to CREATE the bookmark'
        })
      }
          
    },
    async delete ( req ,res ){

      
      
      
    try{
        const { id } = req.query
        
        const bookmark = await Bookmark.findOne({
          where:{
            id: id
          }
        })

        console.log(bookmark)

        if(!bookmark){
          return res.status(404).send({
            error: 'You don\'t have acces here'
          })
        }


        await bookmark.destroy()
        res.send(bookmark)
      
      }catch(err){
        res.status(505).send({
          error: 'Error has ocurred trying to DELETE the bookmark'
        })
      }
          
    },

}