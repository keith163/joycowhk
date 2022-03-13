"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cows", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sub_district_id: {
        type: Sequelize.INTEGER,
      },
      unique_code: {
        type: Sequelize.STRING,
      },
      nick_name: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.BOOLEAN,
      },
      feature_details: {
        type: Sequelize.STRING,
      },
      other_details: {
        type: Sequelize.STRING,
      },
      food_id: {
        type: Sequelize.INTEGER,
      },
      discovered_at: {
        type: Sequelize.DATE,
      },
      is_auth: {
        type: Sequelize.BOOLEAN,
      },
      authed_by: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cows");
  },
};
