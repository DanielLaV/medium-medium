"use strict";
module.exports = (sequelize, DataTypes) => {
  const storyToTopic = sequelize.define(
    "storyToTopic",
    {
      storyId: DataTypes.INTEGER,
      topicId: DataTypes.INTEGER,
    },
    {}
  );
  storyToTopic.associate = function (models) {
    // associations can be defined here
  };
  return storyToTopic;
};
