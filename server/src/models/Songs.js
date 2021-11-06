
module.exports = (sequelize, DataType) =>{

    const Songs = sequelize.define('Songs',{
        title: DataType.STRING,
        artist: DataType.STRING,
        genere: DataType.STRING,
        album: DataType.STRING,
        albumImage: DataType.STRING,
        youtubeId: DataType.STRING,
        lyric: DataType.TEXT,
        tab: DataType.TEXT
    } )

    return Songs
}