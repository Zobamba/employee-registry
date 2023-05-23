/* eslint-disable no-undef */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'employees',
      'deletedAt',
      {
        allowNull: true,
        type: Sequelize.DATE,
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('employees', 'deletedAt');
  },
};
