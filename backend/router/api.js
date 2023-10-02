const express = require("express");
const router = express.Router();
const userContoller = require('../controller/userController')

router.get('/',userContoller.getUser)
router.post('/createUser', userContoller.createUser)
router.post('/loginUsers', userContoller.LoginUsers)


module.exports = router;