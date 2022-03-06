import { Request, Response } from 'express';
import { CheckoutInterface } from '../models/checkout.model';
import { CheckoutService } from '../services/checkout.service';

export class CheckoutController {
  public static async checkout(req: Request, res: Response) {
    const {
      body: { checkout },
    } = req;

    const checkedOutCart: CheckoutInterface[] = await new CheckoutService().checkout([checkout]);

    res.json({ checkedOutCart }).status(200);
  }
}
