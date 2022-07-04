'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rendezvousdgs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      fonction: {
        type: Sequelize.STRING
      },
      motif: {
        type: Sequelize.STRING
      },
      categorie: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      ajoutepar: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      confirmation: {
        type: Sequelize.STRING
      },
      heure: {
        type: Sequelize.TIME
      },
      status: {
        type: Sequelize.STRING
      },
      commentaire: {
        type: Sequelize.STRING
      },
      user: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rendezvousdgs');
  }
};