import { Request, Response } from 'express';

// import connection from '../models/connection';
import ProductsService from '../services/productsService';

class ProductsController {
  public service: ProductsService;

  constructor(service: ProductsService = new ProductsService()) {
    this.service = service;
  }
  
  public async addNewProduct(req: Request, res: Response): Promise<Response> {
    const info = req.body;
    
    const productAdded = await this.service.addNewProduct(info);
    return res.status(201).json(productAdded);
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const products = await this.service.getAllProducts();
    return res.status(200).json(products);
  }
}

export default ProductsController;