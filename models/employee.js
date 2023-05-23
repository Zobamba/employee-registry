/* eslint-disable no-undef */
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employees', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
  });
  employee.init({
    fullName: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'employee',
    paranoid: true
  });
  employee.associate = (models) => {
    employee.hasMany(models.emergencyContact);
  };
  return employee;
};
