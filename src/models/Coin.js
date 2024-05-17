const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    "Coin",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      coinPicture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      marketCap: {
        type: DataTypes.FLOAT,
         allowNull: false,
      },
      supply: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    {
      timestamps: true,
    }
  );
}