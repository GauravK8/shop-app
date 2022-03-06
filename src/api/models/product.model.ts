import * as sequelize from 'sequelize';
import { BuildOptions, Model } from 'sequelize';
import { TABLE_NAMES } from '../../config/constants';
import database from '../../config/db';
import { IProduct } from '../../interfaces/Product';

// Database connection instance
let databaseInstance = database.getInstance();

export interface ProductInterface extends Model<IProduct> {}

type ProductStaticInterface = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductInterface;
};

// Sequelize Model
export const ProductModel = <ProductStaticInterface>databaseInstance.define(
  TABLE_NAMES.T_PRODUCT,
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: sequelize.STRING,
      allowNull: true,
    },
    description: {
      type: sequelize.TEXT,
      allowNull: true,
    },
    picture: {
      type: sequelize.STRING,
      allowNull: true,
    },
    amount: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: TABLE_NAMES.T_PRODUCT,
    timestamps: false,
  },
);
