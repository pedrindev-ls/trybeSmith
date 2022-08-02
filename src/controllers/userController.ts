import { Request, Response } from 'express';
import jwtService from '../services/jwtService';

import UsersService from '../services/userService';

class UsersController {
  public service: UsersService;

  constructor(service: UsersService = new UsersService()) {
    this.service = service;
  }

  public async addNewUser(req: Request, res: Response): Promise<Response> {
    const item = req.body;
    const userAdded = await this.service.addNewUser(item);

    const token = jwtService.createToken(userAdded);

    return res.status(201).json({ token });
  }
}

export default UsersController;