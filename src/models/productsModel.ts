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

  getAll = async (): Promise<AddProducts[]> => {
    const sql = 'SELECT * FROM Trybesmith.Products';

    const [item] = await this.connection.query(sql);

    return item as AddProducts[];
  };
}

export default ProductsModel;