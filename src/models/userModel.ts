import { Pool, ResultSetHeader } from 'mysql2/promise';
import { AddUser } from '../interfaces/userInterface';

class UserModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  addUser = async (
    username: string, 
    classe: string, 
    level: number, 
    password: string,
  ): Promise<AddUser> => {
    const sql = `INSERT INTO Trybesmith.Users 
    (username, classe, level, password) 
    VALUES
    (?, ?, ?, ?)`;
    
    const item = await this.connection
      .execute<ResultSetHeader>(sql, [username, classe, level, password]);
    
    const [dataInsertId] = item;
    const { insertId } = dataInsertId;
    return { id: insertId, username, classe, level, password };
  };
}

export default UserModel;