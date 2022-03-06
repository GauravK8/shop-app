import { ICart } from '../../interfaces/Cart';
import { CartInterface, CartModel } from '../models/cart.model';

export class CartService {
  public async addToCart(data: Partial<ICart>[]): Promise<CartInterface[]> {
    return CartModel.bulkCreate(data, { updateOnDuplicate: ['qty'] });
  }
  public async getCart(cart_id: any): Promise<CartInterface[]> {
    return CartModel.findAll({
      where: { cart_id },
      raw: true,
      nest: true,
    });
  }
}
