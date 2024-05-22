import Models from '../../Models/index.js';
import { errorResponse, successResponse, successError } from '../../helper/helper.js';
import _ from 'lodash'


export const getFeed = async (req, res) => {
    try {
        const data = await Models.Feeds.find().populate({path:"userId"});
        successResponse(res, "GetFeed", data);
    } catch (error) {
        console.log(error, '==err');
        errorResponse(res, "error", error.message);
    }
};

export const CreateFeed = async(req, res)=>{
    try {
        console.log( req.body,'=====')
        const data = req.body
        if(_.isEmpty(data)){
            return  successError(res, "payload", {});
        }
         await Models.Feeds.create(data)
        successResponse(res, "Feed Created", {}); 
    } catch (error) {
        console.log(error, '==err');
        errorResponse(res, "error", error.message);    
    }
}
