"use strict";
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    "Like",
    {
      storyId: DataTypes.INTEGER,
      commentId: DataTypes.INTEGER,
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Like.associate = function (models) {
    Like.belongsTo(models.Story, { foreignKey: "storyId" });
    Like.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Like;
};
