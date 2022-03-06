'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('checkout', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
      },
      cart_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      total_amount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      contact_no: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      payment_mode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('checkout');
  }
};
