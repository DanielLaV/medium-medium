"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Topics",
      [
        {
          name: `Mediumship`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Psychics`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: `ESP`, createdAt: new Date(), updatedAt: new Date() },
        {
          name: `Long Island Medium`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: `Advice`, createdAt: new Date(), updatedAt: new Date() },
        {
          name: `That's So Raven`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Psychic Pokemon`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Topics", null, {});
  },
};
