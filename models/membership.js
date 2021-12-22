'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Membership.init({
    nik: DataTypes.STRING,
    name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    birth_place: DataTypes.STRING,
    address: DataTypes.STRING,
    last_rent: DataTypes.DATE,
    is_activated: DataTypes.BOOLEAN,
    is_deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};