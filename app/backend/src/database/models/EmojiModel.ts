// src/database/models/user.model.js
import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Emoji extends Model {
  declare public id: number;
  declare public name: string;
  declare public url: string;
}

Emoji.init({
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
  }, {
    sequelize: db,
    modelName: 'Emoji',
    tableName: 'emojis',
    underscored: true,
    timestamps: false,
  });

export default Emoji;
