'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey: 'cityId'
      })
      this.belongsTo(models.Role, {
        foreignKey: 'roleId'
      })
      this.hasMany(models.EducationalProfile, {
        foreignKey: 'userId'
        // onDelete:"CASCADE",
        // onUpdate:"CASCADE"
      })
      this.hasOne(models.WorkProfile, {
        foreignKey: 'userId',
        targetKey: 'id'
      })
      this.hasMany(models.Charge, {
        foreignKey: 'chargeId'
        // onDelete:"CASCADE",
        // onUpdate:"CASCADE"
      })
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      fullname: DataTypes.STRING,
      cityId: DataTypes.INTEGER,
      roleId: DataTypes.INTEGER,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      status: DataTypes.ENUM('activo', 'jobReady')
    },
    {
      sequelize,
      modelName: 'User'
    }
  )

  return User
}
