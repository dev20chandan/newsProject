import express from 'express';
// import { CreateFeed, getFeed, updateFeed, deleteFeed } from '../../controller/App/FeedController.js'
import { order,orderValidate } from '../../controller/App/PaymentsController.js';
const router = express.Router();

// router.get("/getFeed", getFeed)
router.post("/order",order)
router.post("/validate",orderValidate)

// router.patch('/updateFeed', updateFeed)
// router.delete('/deleteFeed', deleteFeed)



export default router;