"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Topics",
      [
        {
          id: 1,
          name: `Mediumship`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: `Psychics`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { id: 3, name: `ESP`, createdAt: new Date(), updatedAt: new Date() },
        {
          id: 4,
          name: `Long Island Medium`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { id: 5, name: `Advice`, createdAt: new Date(), updatedAt: new Date() },
        {
          id: 6,
          name: `That's So Raven`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
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
