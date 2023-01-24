const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../../../../../../E-commerce-backend/develop/config/connection.js.js');

class Category extends Model {}

Category.init(
  {
    category_name:{type: DataTypes.STRING}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
