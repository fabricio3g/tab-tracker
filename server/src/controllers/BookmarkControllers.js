const { Bookmark }  = require('../models')
const { Op } = require('sequelize')

module.exports  = {
    
    async index ( req ,res ){

      const { songId, userId } = req.query
        
      try{

        const bookmark = await Bookmark.findOne({
            where:{
                songId: songId,
                userId: userId
            }
        })
        
        res.send(bookmark)

      }catch(err){

      }
          
    },
 

}