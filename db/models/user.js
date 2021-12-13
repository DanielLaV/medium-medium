"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: { type: DataTypes.INTEGER, allowNull: false },
      username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
      passwordHash: { type: DataTypes.STRING.BINARY, allowNull: false },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      about: { type: DataTypes.TEXT, allowNull: false },
      profileImage: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
