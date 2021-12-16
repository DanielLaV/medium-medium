"use strict";
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define(
    "Story",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      title: { type: DataTypes.STRING(100), allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
      storyImage: { type: DataTypes.STRING },
    },
    {}
  );
  Story.associate = function (models) {
    Story.hasMany(models.Like, { foreignKey: "storyId" });
    Story.hasMany(models.Comment, { foreignKey: "storyId" });
    Story.belongsTo(models.User, { foreignKey: "userId" });
    const columnMapping = {
      through: "storyToTopic",
      otherKey: "topicId",
      foreignKey: "storyId",
    };
    Story.belongsToMany(models.Topic, columnMapping);
  };
  return Story;
};
