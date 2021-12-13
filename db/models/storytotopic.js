'use strict';
module.exports = (sequelize, DataTypes) => {
  const StorytoTopic = sequelize.define('StorytoTopic', {
    storyId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  StorytoTopic.associate = function(models) {
    // associations can be defined here
  };
  return StorytoTopic;
};