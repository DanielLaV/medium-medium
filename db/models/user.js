"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: { type: DataTypes.INTEGER, allowNull: false },
      username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
      passwordHash: { type: DataTypes.STRING.BINARY, allowNull: false },
      firstName: { type: DataTypes.STRING(50), allowNull: false },
      lastName: { type: DataTypes.STRING(50), allowNull: false },
      about: { type: DataTypes.TEXT, allowNull: false },
      profileImage: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.hasMany(models.Story, { foreignKey: "storyId" });
    User.hasMany(models.Like, { foreignKey: "userId" });
  };
  return User;
};
