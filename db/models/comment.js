"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      storyId: { type: DataTypes.INTEGER, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.Story, { foreignKey: 'storyId' })
    Comment.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Comment;
};
