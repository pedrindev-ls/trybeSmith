import connection from '../models/connection';

import ProductsModel from '../models/productsModel';
import { AddProducts } from '../interfaces/productsInterface';

class ProductsService {
  public productsModel: ProductsModel;

  constructor(model: ProductsModel = new ProductsModel(connection)) {
    this.productsModel = model;
  }

  addNewProduct = async (items: AddProducts): Promise<AddProducts> => {
    const { name, amount } = items;
    const item = await this.productsModel.addNew(name, amount);
    
    return item;
  };

  getAllProducts = async (): Promise<AddProducts[]> => {
    const item = await this.productsModel.getAll();
    return item;
  };
}

export default ProductsService;