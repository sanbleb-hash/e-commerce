import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, erroHandler } from './middleWare/errorMiddlewas.js';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('success !! '));

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(erroHandler);

app.listen(
  port,
  console.log(`app is running in ${process.env.NODE_ENV} mode on port ${port}`)
);
