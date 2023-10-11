import express from 'express';
import { getUser, createUser, loginUsers } from '../controller/userController.js';
const router = express.Router();

router.get('/', getUser);
router.post('/createUser', createUser);
router.post('/loginUsers', loginUsers);

export default router;
