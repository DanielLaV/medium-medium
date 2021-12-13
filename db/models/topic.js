"use strict";
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define(
    "Topic",
    {
      id: DataTypes.INTEGER,
      name: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    },
    {}
  );
  Topic.associate = function (models) {
    // associations can be defined here
  };
  return Topic;
};
