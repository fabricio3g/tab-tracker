
module.exports = (sequelize, DataType) =>{

    const Bookmark = sequelize.define('Songs',{})

    Bookmark.associete =( modles )=> {
        Bookmark.belogsTo(modles.User)
        Bookmark.belogsTo(modles.Song)
    }
    return Bookmark
}