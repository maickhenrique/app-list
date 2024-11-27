const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Task = sequelize.define('Task', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pendente', 
  },
  dueDate: {
    type: DataTypes.DATE,
  },
});

module.exports = Task;
