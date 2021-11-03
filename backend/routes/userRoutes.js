import express from 'express';
import {
  getUserProfile,
  registerUser,
  userAuth,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', userAuth);
router.route('/profile').get(getUserProfile);

export default router;
