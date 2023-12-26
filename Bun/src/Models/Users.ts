import { Sequelize, DataTypes } from "sequelize"
import { sequelize } from '../lib/sql.js'

export const Users = sequelize.define('Users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  birthYear: DataTypes.NUMBER,
  friends: DataTypes.STRING,
}, {
  paranoid: true,
  tableName: 'P13ns',
  omitNull: false
});