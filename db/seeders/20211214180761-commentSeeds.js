"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 1,
          storyId: 2,
          content: `I think that in a past life, I was Sweet Baby Jesus, no lie.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storyId: 1,
          content: `Get a real job, ya filthy animal!!!!! Professional psychic? Fat chance.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storyId: 3,
          content: `Mewtwo is twice as nice`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storyId: 4,
          content: `LEAVE THERESA ALONE!!!!!!!!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storyId: 2,
          content: `Bro who cares about past lives, i'm just trying to reincarnate to my final form and reach nirvana`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storyId: 3,
          content: `How could something so cute be so scary and powerful!!!!!!!! `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storyId: 5,
          content: `Real talk That's so Raven was great, but it can't compete with Cory in the house.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storyId: 2,
          content: `I think I was my mother in my past life.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
