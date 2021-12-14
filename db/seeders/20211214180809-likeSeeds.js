"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Likes",
      [
        {
          id: 1,
          storyId: 1,
          commentId: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          storyId: 2,
          commentId: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          storyId: 4,
          commentId: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          storyId: 3,
          commentId: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          storyId: 5,
          commentId: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          storyId: 5,
          commentId: null,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          storyId: 5,
          commentId: null,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          storyId: 5,
          commentId: null,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          storyId: 3,
          commentId: null,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          storyId: 3,
          commentId: null,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
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
