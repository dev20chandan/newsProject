import User from '../Models/user.js';
import { errorResponse, successResponse } from '../helper/helper.js';

export const getUser = async (req, res) => {
  try {
    console.log('-dddddd');
    const data = await User.find();
    successResponse(res,"welcomeMessage",data)
  } catch (error) {
    console.log(error, '==err');
    errorResponse((res,"error",error.message))
  }
};

export const createUser = async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.email });
    if (data) return res.json({ msg: 'This email already exists' });
    const userCreate = await User.create(req.body);
    // return res.json(userCreate);
    successResponse(res,"success",userCreate)

  } catch (error) {
    console.log(error);
    errorResponse((res,"error",error.message))

  }
};

export const loginUsers = async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.email });
    if (!data) return res.json({ msg: 'This email does not exist. Please sign up first' });
    if (data.password !== req.body.password) return res.json({ msg: 'Password does not match' });
    return res.json({ msg: 'Login success', data });
  } catch (error) {
    console.log(error);
    return res.json(error.message);
  }
};
