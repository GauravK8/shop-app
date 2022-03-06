'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cart', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        // primaryKey: true,
        unique: true,
      },
      cart_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      item_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cart');
  },
};
