// src/database/models/user.model.js
import { NUMBER } from 'sequelize';
import { ARRAY } from 'sequelize';
import { Model, INTEGER, STRING, DATE} from 'sequelize';
import db from '.';

class Content extends Model {
  declare public id: number;
  declare public idUser: number;
  declare public type: string;
  declare public image: string;
  declare public title: string;
  declare public date: string;
  declare public time: string;
  declare public descript: string;
  declare public status: string;
  declare public createdAt: Date;
  declare public updatedAt: Date;
  static associate: (models: any) => void;
}

Content.init({
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
    descript: {
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
  }, {
    sequelize: db,
    modelName: 'Content',
    tableName: 'contents',
    underscored: false,
    timestamps: true,
  });

  Content.associate = (Model) => {
    Content.belongsTo(Model.User,
      { foreignKey: 'id', as: 'user' },
      );
  };

export default Content;
