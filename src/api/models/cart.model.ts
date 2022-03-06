import * as sequelize from 'sequelize';
import { BuildOptions, Model } from 'sequelize';
import { TABLE_NAMES } from '../../config/constants';
import database from '../../config/db';
import { ICart } from '../../interfaces/Cart';

// Database connection instance
let databaseInstance = database.getInstance();

export interface CartInterface extends Model<ICart> {}

type CartStaticInterface = typeof Model & {
  new (values?: object, options?: BuildOptions): CartInterface;
};

// Sequelize Model
export const CartModel = <CartStaticInterface>databaseInstance.define(
  TABLE_NAMES.T_CART,
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      // primaryKey: true,
      unique: true,
    },
    cart_id: {
      type: sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: sequelize.UUIDV4,
    },
    item_id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    qty: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    modelName: TABLE_NAMES.T_CART,
    timestamps: false,
  },
);
