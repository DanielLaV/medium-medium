"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "storyToTopics",
      [
        {
          storyId: 1,
          topicId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 1,
          topicId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 2,
          topicId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 3,
          topicId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 4,
          topicId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 5,
          topicId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 2,
          topicId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("storyToTopics", null, {});
  },
};
