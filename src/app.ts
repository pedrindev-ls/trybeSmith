import express from 'express';
import ordersRouter from './routes/ordersRouter';
import productsRouter from './routes/productsRouter';
import usersRouter from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);

export default app;
