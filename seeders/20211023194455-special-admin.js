'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Chirac Ilunga",
        username: "Expert-Informaticien",
        email: "tshitengailunga@icloud.com",
        password:
          "$2b$10$pUaWvCIKqTCA8W/byi2Z.uEic1TgUCzLYvBIQtGkbaSAu3QBDdPJC",
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Josh Mwenze",
        username: "S/Directeur-Info",
        email: "djoshmwenze80@gmail.com",
        password:
          "$2b$10$w0lYxwnSVQPJPjGYaGStLeBsWpbqUopDNEzseNEmv0jJpykZ3oU8K",
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
