import express from 'express';
import api from './api.js';
import Users from './app/users.js'
import Feeds from "./app/feed.js"

const router = express.Router();

router.use('/api', api);
router.use('/api/',Users)
router.use('/api/',Feeds)

export default router;
