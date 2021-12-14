"use strict";
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define(
    "Topic",
    {
      // id: DataTypes.INTEGER,
      name: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    },
    {}
  );
  Topic.associate = function (models) {
    const columnMapping = {
      through: 'storyToTopics',
      otherKey: 'storyId',
      foreignKey: 'topicId'
  }
  Topic.belongsToMany(models.Story, columnMapping)
  };
  return Topic;
};
