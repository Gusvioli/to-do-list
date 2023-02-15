// src/database/models/user.model.js
import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  declare public id: number;
  declare public name: string;
  declare public email: string;
  declare public password: string;
  declare public role: string;
}

  User.init({
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    role: {
      type: STRING,
      allowNull: false,
    },
  }, {
    sequelize: db,
    modelName: 'User',
    tableName: 'users',
    underscored: true,
    timestamps: false,
  });

export default User;
