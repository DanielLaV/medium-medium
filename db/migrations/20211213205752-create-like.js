"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Likes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      storyId: {
        type: Sequelize.INTEGER,
        references: { Models: "Story" },
      },
      commentId: {
        type: Sequelize.INTEGER,
        references: { Models: "Comment" },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { Models: "User" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Likes");
  },
};
