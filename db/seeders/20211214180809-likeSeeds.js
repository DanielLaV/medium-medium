"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Likes",
      [
        {
          storyId: 1,
          commentId: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 2,
          commentId: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 4,
          commentId: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 3,
          commentId: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 5,
          commentId: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 5,
          commentId: null,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 5,
          commentId: null,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 5,
          commentId: null,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 3,
          commentId: null,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 3,
          commentId: null,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 2,
          commentId: null,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Likes", null, {});
  },
};
