"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sub_district extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sub_district.init(
    {
      district_id: DataTypes.INTEGER,
      sub_district_code: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "sub_district",
    }
  );
  return sub_district;
};
