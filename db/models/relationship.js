"use strict";
module.exports = (sequelize, DataTypes) => {
  const Relationship = sequelize.define(
    "Relationship",
    {
      followingUserId: { type: DataTypes.INTEGER, allowNull: false },
      followerUserId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Relationship.associate = function (models) {
    Relationship.belongsTo(models.User, {
      as: "FollowerLinks",
      foreignKey: "followerUserId",
    });
    Relationship.belongsTo(models.User, {
      as: "FollowingLinks",
      foreignKey: "followingUserId",
    });
  };
  return Relationship;
};
