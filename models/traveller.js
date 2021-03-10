const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'traveller'
  }
);

module.exports = Traveller;