'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rendezvousdga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rendezvousdga.init({
    name: DataTypes.STRING,
    fonction: DataTypes.STRING,
    motif: DataTypes.STRING,
    categorie: DataTypes.STRING,
    phone: DataTypes.STRING,
    date: DataTypes.DATE,
    ajoutepar: DataTypes.STRING,
    confirmation: DataTypes.STRING,
    heure: DataTypes.TIME,
    status: DataTypes.STRING,
    commentaire: DataTypes.STRING,
    user:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rendezvousdga',
  });
  return rendezvousdga;
};