"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "StoriesToTopics",
      [
        {
          id: 1,
          storyId: 1,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: newDate(),
        },
        {
          id: 2,
          storyId: 1,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: newDate(),
        },
        {
          id: 3,
          storyId: 2,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: newDate(),
        },
        {
          id: 4,
          storyId: 3,
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: newDate(),
        },
        {
          id: 5,
          storyId: 4,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: newDate(),
        },
        {
          id: 6,
          storyId: 5,
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: newDate(),
        },
        {
          id: 7,
          storyId: 2,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: newDate(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("StoriesToTopics", null, {});
  },
};
