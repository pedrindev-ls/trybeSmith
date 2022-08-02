import express from 'express';
import ordersRouter from './routes/ordersRouter';
import productsRouter from './routes/productsRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

export default app;
