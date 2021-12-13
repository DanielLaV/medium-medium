'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};