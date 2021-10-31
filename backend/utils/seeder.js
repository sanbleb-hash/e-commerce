import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './users.js';
import products from './data.js';
import User from '../modals/userModal.js';
import Product from '../modals/productModal.js';
import Order from '../modals/orderModal.js';
import db from '../config/db.js';
import connectDB from '../config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });
    await Product.insertMany(sampleProducts);
    console.log('data imported');
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};
const distroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  distroyData();
} else {
  importData();
}
