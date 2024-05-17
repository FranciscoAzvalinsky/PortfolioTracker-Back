const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    "Wallet",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
    },
    {
      timestamps: true,
    }
  );
}