const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "Transaction",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      buyCoinPrice:{
        type: DataTypes.FLOAT,
        allowNull: false
      },
      buyCoinAmount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
    },
    {
      timestamps: true,
    }
  );
}