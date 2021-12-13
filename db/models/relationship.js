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
    //many to many?
  };
  return Relationship;
};
