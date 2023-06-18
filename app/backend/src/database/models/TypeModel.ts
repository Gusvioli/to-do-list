// src/database/models/user.model.js
import { Model, INTEGER, STRING } from 'sequelize'
import db from '.'

class Type extends Model {
  public declare id: number
  public declare name: string
  public declare url: string
}

Type.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    url: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'Type',
    tableName: 'types',
    underscored: true,
    timestamps: false,
  },
)

export default Type
