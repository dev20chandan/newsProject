import express from 'express';
import { CreateFeed, getFeed, updateFeed, deleteFeed } from '../../controller/App/FeedController.js'
const router = express.Router();

router.get("/getFeed", getFeed)
router.post("/createFeed", CreateFeed)
router.patch('/updateFeed', updateFeed)
router.delete('/deleteFeed', deleteFeed)



export default router;