/* eslint-disable no-undef */
module.exports = (sequelize, DataTypes) => {
  const emergencyContact = sequelize.define('emergencyContact', {
    employeeId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    relationship: DataTypes.STRING
  }, { paranoid: true });
  emergencyContact.associate = (models) => {
    emergencyContact.belongsTo(models.employee, {
      foreignKey: 'employeeId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return emergencyContact;
};
