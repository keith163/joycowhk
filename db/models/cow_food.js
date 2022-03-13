"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cow_food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cow_food.init(
    {
      cow_id: DataTypes.INTEGER,
      food_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cow_food",
      timestamps: false,
    }
  );
  return cow_food;
};
