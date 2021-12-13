'use strict';
module.exports = (sequelize, DataTypes) => {
  const Relationship = sequelize.define('Relationship', {
    followingUserId: DataTypes.INTEGER,
    followeUserId: DataTypes.INTEGER
  }, {});
  Relationship.associate = function(models) {
    // associations can be defined here
  };
  return Relationship;
};