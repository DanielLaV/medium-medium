"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // id: { type: DataTypes.INTEGER, allowNull: false },
      username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
      passwordHash: { type: DataTypes.STRING, allowNull: false },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      about: { type: DataTypes.TEXT },
      profileImage: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.hasMany(models.Story, { foreignKey: "authorId" });
    User.hasMany(models.Like, { foreignKey: "userId" });
    User.hasMany(models.Relationship, { as: 'FollowerLinks', foreignKey: 'followerUserId' });
    User.hasMany(models.Relationship, { as: 'FollowingLinks', foreignKey: 'followingUserId' });
  };
  return User;
};
