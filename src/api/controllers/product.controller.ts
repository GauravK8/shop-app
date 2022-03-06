import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { logger } from '../../config/logger';
import { getHost } from '../../config/utils';
import { IProductFilters } from '../../interfaces/Product';
import { ProductInterface } from '../models/product.model';
import { ProductService } from '../services/product.service';

export class ProductController {
  public static async getProducts(req: Request, res: Response) {
    const { body, protocol } = req;
    const host = getHost(req);

    const filter: IProductFilters = ['title', 'description'].reduce((acc: any, k) => {
      if (body[k] && body[k] !== null && body[k] !== undefined) {
        acc[k] = { [Op.like]: `%${body[k]}%` };
      }
      return { ...acc };
    }, {});

    logger.info(filter);

    const products: ProductInterface[] = await new ProductService().getProducts(filter);

    const p = products.map((i: any) => ({
      ...i,
      picture: `${protocol}://${host}/images/${i.picture}`,
    }));
    res.json({ products: p }).status(200);
  }
}
