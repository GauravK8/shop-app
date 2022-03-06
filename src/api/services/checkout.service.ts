import { ICheckout } from '../../interfaces/Checkout';
import { CheckoutInterface, CheckoutModel } from '../models/checkout.model';

export class CheckoutService {
  public async checkout(data: Partial<ICheckout>[]): Promise<CheckoutInterface[]> {
    return CheckoutModel.bulkCreate(data, {
      updateOnDuplicate: ['total_amount', 'contact_no', 'email', 'address', 'payment_mode'],
    });
  }
}
