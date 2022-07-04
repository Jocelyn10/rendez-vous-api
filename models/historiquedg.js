'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historiquedg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Historiquedg.init({
    name: DataTypes.STRING,
    fonction: DataTypes.STRING,
    motif: DataTypes.STRING,
    categorie: DataTypes.STRING,
    phone: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Historiquedg',
  });
  return Historiquedg;
};