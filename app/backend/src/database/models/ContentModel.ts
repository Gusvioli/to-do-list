// src/database/models/user.model.js
import { Model, INTEGER, STRING, DATE } from 'sequelize'
import db from '.'

class Content extends Model {
  public declare id: number
  public declare idUser: number
  public declare type: string
  public declare image: string
  public declare title: string
  public declare date: string
  public declare time: string
  public declare description: string
  public declare status: string
  public declare createdAt: Date
  public declare updatedAt: Date
  static associate: (models: any) => void
}

Content.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    idUser: {
      type: INTEGER,
      allowNull: false,
    },
    type: {
      type: STRING,
      allowNull: false,
    },
    emoji: {
      type: STRING,
      allowNull: false,
    },
    date: {
      type: STRING,
      allowNull: false,
    },
    time: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: STRING,
      allowNull: false,
    },
    status: {
      type: STRING,
      allowNull: false,
    },
    createdAt: {
      type: DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DATE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'Content',
    tableName: 'contents',
    underscored: false,
    timestamps: true,
  },
)

Content.associate = (Model) => {
  Content.belongsTo(Model.User, { foreignKey: 'id', as: 'user' })
}

export default Content
