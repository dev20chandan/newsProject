import Models from '../../Models/index.js';
import { ValidUser } from '../../Validations/users.js';
import { errorResponse, successResponse, successError } from '../../helper/helper.js';
import _ from 'lodash'
export const getUser = async (req, res) => {
  try {
    const data = await Models.Users.find();
    successResponse(res, "welcomeMessage", data);
  } catch (error) {
    console.log(error, '==err');
    errorResponse(res, "error", error.message);
  }
};

export const registerUser = async (req, res) => {
  try {
    const paylaod = req.body
    // const aavalidateUser = await ValidUser(paylaod)
    // console.log(aavalidateUser,'======valid user')
    if (_.isEmpty(paylaod)) {
     return successError(res, "payload", {});
    }
    const data = await Models.Users.findOne({ email: req.body.email });
    if (data) return errorResponse((res, "This email already exists", error.message));
    const userCreate = await Models.Users.create(req.body);
    successResponse(res, "success", userCreate);
  } catch (error) {
    console.log(error.message, '======server error')
    errorResponse(res, "error", error.message);
  }
}

export const loginUsers = async (req, res) => {
  try {
    const data = await Models.Users.findOne({ email: req.body.email });
    
    if (!data) {
      return successError(res, "UserNotFound", {});
    }
    if (data.password !== req.body.password) return errorResponse(res, "Password does not match", {});
    successResponse(res, "LoginSuccess", data);
  } catch (error) {
    console.log(error);
    errorResponse(res, "error", error.message);
  }
};