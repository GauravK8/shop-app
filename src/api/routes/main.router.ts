import { Router } from 'express';
import { CartController } from '../controllers/cart.controller';
import { CheckoutController } from '../controllers/checkout.controller';
import { MainController } from '../controllers/main.controller';
import { ProductController } from '../controllers/product.controller';

export class MainRouter {
  router: Router;

  constructor() {
    this.router = Router({ mergeParams: true });

    this.router.route('/api/v1/health/').get(MainController.getHealthInfo);
    this.router.route('/api/v1/product/').post(ProductController.getProducts);
    this.router.route('/api/v1/cart/').get(CartController.getCart).post(CartController.addToCard);
    this.router.route('/api/v1/checkout/').post(CheckoutController.checkout);
  }
}
