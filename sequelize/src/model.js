const seq = require('./seq')
const { Sequelize, Model, DataTypes } = require('sequelize')
 const Demo = seq.define('Demo', {
     firstName: {
         type: DataTypes.STRING,
         allowNull: false
     },
     lastName: {
         type: DataTypes.STRING,
         allowNull: false
     },
     comment: DataTypes.TEXT
 })

 const ChildDemo = seq.define('ChildDemo', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comment: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    middleName: DataTypes.TEXT,
    userId: DataTypes.INTEGER

})

 module.exports = {
     Demo,
     ChildDemo
 } 



// creat User model

