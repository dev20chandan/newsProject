import User from '../Models/user.js';
import { errorResponse, successResponse } from '../helper/helper.js';

export const getUser = async (req, res) => {
  try {
    const data = await User.find();
    successResponse(res, "welcomeMessage", data);
  } catch (error) {
    console.log(error, '==err');
    errorResponse((res, "error", error.message));
  }
};

export const createUser = async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.email });
    if (data) return errorResponse((res, "This email already exists", error.message));
    const userCreate = await User.create(req.body);
    successResponse(res, "success", userCreate);
  } catch (error) {
    console.log(error);
    errorResponse((res, "error", error.message));
  }
};

export const loginUsers = async (req, res) => {
  try {
    console.log(req.body,'====req,')
    const data = await User.findOne({ email: req.body.email });
    console.log(data,'=============data')
    if (!data) {
      return errorResponse(res, "UserNotFound", {});
    }
    if (data.password !== req.body.password) return errorResponse(res, "Password does not match", {});
    
    successResponse(res, "LoginSuccess", data);
  } catch (error) {
    console.log(error);
    errorResponse((res, "error", error.message));
  }
};
