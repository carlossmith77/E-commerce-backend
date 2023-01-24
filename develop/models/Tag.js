const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../../../../../../E-commerce-backend/develop/config/connection.js.js');

class Tag extends Model {}

Tag.init(
  {
    tag_name:{type: DataTypes.STRING}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
