import { Request, Response } from 'express';
import { CartInterface } from '../models/cart.model';
import { CartService } from '../services/cart.service';

export class CartController {
  public static async addToCard(req: Request, res: Response) {
    const {
      body: { items },
    } = req;

    const cart: CartInterface[] = await new CartService().addToCart(items);

    res.json({ cart }).status(200);
  }

  public static async getCart(req: Request, res: Response) {
    const {
      cart_id
    } = req.query;

    const cart: CartInterface[] = await new CartService().getCart(cart_id);

    res.json({ cart }).status(200);
  }
}
