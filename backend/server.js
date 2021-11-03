import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, erroHandler } from './middleWare/errorMiddlewas.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('success !! '));

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(erroHandler);

app.listen(
  port,
  console.log(`app is running in ${process.env.NODE_ENV} mode on port ${port}`)
);
