import { Pool, ResultSetHeader } from 'mysql2/promise';
import { AddProducts } from '../interfaces/productsInterface';

class ProductsModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  addNew = async (name: string, amount: string): Promise<AddProducts> => {
    const sql = `INSERT INTO Trybesmith.Products (name, amount) VALUES
    (?, ?);`;

    const item = await this.connection.execute<ResultSetHeader>(sql, [name, amount]);
    const [dataInsertId] = item;
    const { insertId } = dataInsertId;
    return { id: insertId, name, amount };
  };
}

export default ProductsModel;