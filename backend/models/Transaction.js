const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./User ');

const Transaction = db.define('Transaction', {
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('income', 'expense'),
    allowNull: false
  }
});

Transaction.belongsTo(User, { foreignKey: 'User Id' });
User .hasMany(Transaction, { foreignKey: 'User Id' });

module.exports = Transaction;
