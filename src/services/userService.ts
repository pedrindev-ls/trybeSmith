import { AddUser } from '../interfaces/userInterface';
import connection from '../models/connection';

import UserModel from '../models/userModel';

class UsersService {
  public userModel: UserModel;

  constructor(model: UserModel = new UserModel(connection)) {
    this.userModel = model;
  }

  addNewUser = async (items: AddUser): Promise<AddUser> => {
    const { username, classe, level, password } = items;
    const item = await this.userModel.addUser(username, classe, level, password);

    return item;
  };
}

export default UsersService;