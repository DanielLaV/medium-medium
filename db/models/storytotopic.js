"use strict";
module.exports = (sequelize, DataTypes) => {
  const storyToTopic = sequelize.define(
    "storyToTopic",
    {
      storyId: { type: DataTypes.INTEGER, allowNull: false },
      topicId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  storyToTopic.associate = function (models) {
    // associations can be defined here
  };
  return storyToTopic;
};
