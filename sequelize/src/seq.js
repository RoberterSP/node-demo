const { Sequelize, Model, DataTypes } = require('sequelize');

const conf = {
    host: 'localhost',
    dialect: 'mysql'
}


const seq = new Sequelize('koa2_study', 'root', 'Csp123', conf);

module.exports = seq



// class User extends Model {}
// User.init({
//   username: DataTypes.STRING,
//   birthday: DataTypes.DATE
// }, { sequelize, modelName: 'user' });

// (async () => {
//   await sequelize.sync();
//   const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
//   console.log(jane.toJSON());
// })();