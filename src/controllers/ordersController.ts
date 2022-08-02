import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

class OrdersController {
  public service: OrdersService;

  constructor(service: OrdersService = new OrdersService()) {
    this.service = service;
  }

  public async getAllOrders(req: Request, res: Response): Promise<Response> {
    const items = await this.service.getAllOrders();

    return res.status(200).json(items);
  }
}

export default OrdersController;