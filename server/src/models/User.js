 
 module.exports = (sequelize, DataType) =>{
    const User = sequelize.define('User',{
        email: {
            type: DataType.STRING,
            unique: true
        },
        passowrd: DataType.STRING
    })
    return User
 }