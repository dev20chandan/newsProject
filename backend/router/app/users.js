import express from 'express';
import {getUser,registerUser,loginUsers} from '../../controller/App/UsersController.js'
import {authenticateToken} from '../../helper/AuthToken.js'

const router = express.Router();

router.get('/getUser', getUser);
router.post('/register',registerUser)
router.post('/loginUser',loginUsers)

export default router;