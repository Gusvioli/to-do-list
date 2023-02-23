// src/database/models/user.model.js
import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';

class Content extends Model {
  declare public id: number;
  declare public idUser: number;
  declare public type: string;
  declare public image: string;
  declare public title: string;
  declare public subTitle: string;
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
    image: {
      type: STRING,
      allowNull: false,
    }, 
    title: {
      type: STRING,
      allowNull: false,
    }, 
    subTitle: {
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
