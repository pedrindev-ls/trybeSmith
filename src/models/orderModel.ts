import { Pool } from 'mysql2/promise';
import { GetOrders } from '../interfaces/odersInterface';

class OrdersModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  getAll = async (): Promise<GetOrders[]> => {
    const sql = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) 
    AS productsIds FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY o.userId`;

    const [item] = await this.connection.query(sql);

    return item as GetOrders[];
  };
}

export default OrdersModel;