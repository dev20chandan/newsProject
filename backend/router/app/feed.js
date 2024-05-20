import express from 'express';
import {CreateFeed, getFeed} from '../../controller/App/FeedController.js'
const router = express.Router();

router.get("/getFeed" ,getFeed)
router.post("/createFeed" ,CreateFeed)



export default router;