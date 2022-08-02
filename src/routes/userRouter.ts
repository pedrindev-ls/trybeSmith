import { Router } from 'express';

import UsersController from '../controllers/userController';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/', (req, res) => usersController.addNewUser(req, res));

export default usersRouter;