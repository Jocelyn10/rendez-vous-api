'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("confirmations", [
      {
        id: 1,
        name: "Validation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Refus",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Transférer à DGA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Transférer à DRH",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Transférer à DIRFIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Transférer à DIRCOMDEV",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: "Transférer à JURIDIQUE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: "Transférer à CEPI",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: "Transférer à Coordination",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: "Transférer à Assistant DG",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        name: "Transférer à Assistant DGA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("confirmations", null, {});
  }
};
