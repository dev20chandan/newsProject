import Models from '../../Models/index.js';
import { ValidUser } from '../../Validations/users.js';
import { generateToken, errorResponse, successResponse, successError } from '../../helper/helper.js';
import _ from 'lodash'
import jwt from 'jsonwebtoken'
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
    let data = await Models.Users.findOne({ email: req.body.email });
    console.log(data,'============data')
    if (!data) {
      return successError(res, "UserNotFound", {});
    }

    if (data.password !== req.body.password) return errorResponse(res, "Password does not match", {});
    let tokenData = {
      id: data._id,
      email: data.email,
      role: data.role,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    const accessToken = generateToken(tokenData, process.env.SECRET_KEY);
    const refreshToken = generateToken({ id: data._id }, process.env.SECRET_KEY);
    data = data.toJSON()
    data.accessToken = accessToken;
    data.refreshToken = refreshToken;
    successResponse(res, "LoginSuccess", data);
  } catch (error) {
    console.log(error);
    errorResponse(res, "error", error.message);
  }
};