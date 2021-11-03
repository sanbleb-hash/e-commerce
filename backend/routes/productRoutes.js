import express from 'express';
import {
  getProduct,
  getProductById,
} from '../controllers/productcontrollers.js';

const router = express.Router();

//fetching all produucts

router.route('/').get(getProduct);

//fetching one produuct
router.route('/:id').get(getProductById);

export default router;
