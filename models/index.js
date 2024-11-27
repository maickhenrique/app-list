const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

sequelize
  .authenticate()
  .then(() => console.log('Conexão com o banco de dados bem-sucedida!'))
  .catch((err) => console.error('Erro ao conectar ao banco:', err));

module.exports = sequelize;
