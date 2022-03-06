import { Request, Response } from 'express';
import { IProductFilters } from '../../interfaces/Product';
import { ProductInterface, ProductModel } from '../models/product.model';

export class ProductService {
  public async getProducts(filters?: IProductFilters): Promise<ProductInterface[]> {
    return ProductModel.findAll({
      where: { ...filters },
      raw: true,
      nest: true,
    });
  }
}
