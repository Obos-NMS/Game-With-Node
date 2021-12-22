'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    code: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    description: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN,
    id_location: DataTypes.INTEGER,
    changed_by: DataTypes.STRING,
    created_by: DataTypes.STRING,
    deleted_by: DataTypes.STRING,
    deleted_date: DataTypes.DATE,
    changed_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};