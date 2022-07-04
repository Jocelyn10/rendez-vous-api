'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Roles", [
      {
        id: 1,
        name: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "reception",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "receptionpca",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "dg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "dga",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "pca",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: "coord",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: "asspca",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: "assdg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: "assdga",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
