"use strict";
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define(
    "Story",
    {
      authorId: { type: DataTypes.INTEGER, allowNull: false },
      title: { type: DataTypes.STRING(100), allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
    },
    {}
  );
  Story.associate = function (models) {
    Story.hasMany(models.Like, { foreignKey: "storyId" });
    Story.hasMany(models.Comment, { foreignKey: "commentId" });
    Story.belongsTo(models.User, { foreignKey: "authorId" });
    //join table
  };
  return Story;
};
