"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cow.init(
    {
      sub_district_id: DataTypes.INTEGER,
      unique_code: DataTypes.STRING,
      nick_name: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      feature_details: DataTypes.STRING,
      other_details: DataTypes.STRING,
      food_id: DataTypes.INTEGER,
      discovered_at: DataTypes.DATE,
      is_auth: DataTypes.BOOLEAN,
      authed_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cow",
      timestamps: false,
    }
  );
  return cow;
};
