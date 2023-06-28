// src/database/models/user.model.js
import { Model, INTEGER, STRING } from 'sequelize'
import db from '.'

class UserIp extends Model {
  public declare id: number
  public declare ip: string
  public declare data: string
}

UserIp.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ip: {
      type: STRING,
      allowNull: true,
    },
    data: {
      type: STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'UserIp',
    tableName: 'usersIps',
    underscored: true,
    timestamps: false,
  },
)

export default UserIp
