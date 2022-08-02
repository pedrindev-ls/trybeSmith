import connection from '../models/connection';

import OrdersModel from '../models/orderModel';
import { GetOrders } from '../interfaces/odersInterface';

class OrdersService {
  public ordersModel: OrdersModel;

  constructor(model: OrdersModel = new OrdersModel(connection)) {
    this.ordersModel = model;
  }

  getAllOrders = async (): Promise<GetOrders[]> => {
    const item = await this.ordersModel.getAll();

    return item;
  };
}

export default OrdersService;