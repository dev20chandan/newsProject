import express from 'express';
import api from './api.js';
import Users from './app/users.js'

const router = express.Router();

router.use('/api', api);
router.use('/api/',Users)

export default router;
