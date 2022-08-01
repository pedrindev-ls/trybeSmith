import { Router } from 'express';

import ProductsController from '../controllers/productsController';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/', (req, res) => productsController.addNewProduct(req, res));
productsRouter.get('/', (req, res) => productsController.getAll(req, res));

export default productsRouter;