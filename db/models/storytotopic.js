'use strict';
module.exports = (sequelize, DataTypes) => {
  const storyToTopic = sequelize.define('storyToTopic', {
    storyId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  storyToTopic.associate = function(models) {
    // associations can be defined here
  };
  return storyToTopic;
};