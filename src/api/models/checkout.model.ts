import * as sequelize from 'sequelize';
import { BuildOptions, Model } from 'sequelize';
import { TABLE_NAMES } from '../../config/constants';
import database from '../../config/db';
import { ICheckout } from '../../interfaces/Checkout';

// Database connection instance
let databaseInstance = database.getInstance();

export interface CheckoutInterface extends Model<ICheckout> {}

type CheckoutStaticInterface = typeof Model & {
  new (values?: object, options?: BuildOptions): CheckoutInterface;
};

// Sequelize Model
export const CheckoutModel = <CheckoutStaticInterface>databaseInstance.define(
  TABLE_NAMES.T_CHECKOUT,
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      // primaryKey: true,
    },
    cart_id: {
      type: sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    total_amount: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    contact_no: {
      type: sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: sequelize.STRING,
      allowNull: true,
    },
    address: {
      type: sequelize.JSON,
      allowNull: true,
    },
    payment_mode: {
      type: sequelize.STRING,
      allowNull: true,
    },
  },
  {
    modelName: TABLE_NAMES.T_CHECKOUT,
    timestamps: false,
  },
);
