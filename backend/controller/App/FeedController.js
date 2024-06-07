import { decode } from 'jsonwebtoken';
import Models from '../../Models/index.js';
import { errorResponse, successResponse, successError } from '../../helper/helper.js';
import _ from 'lodash'


export const getFeed = async (req, res) => {
    try {
        const { page = 1, limit = 10, search = '', filter = '',sortBy = 'createdAt', sortOrder = 'desc' } = req.query;
        // Construct the query object
        let query = { isDeleted: false };

        // If there's a search term, add a regex condition (assuming search on a specific field, e.g., title)
        if (search) {
            query.title = { $regex: search, $options: 'i' }; // Case-insensitive search
        }

        // If there's a filter, add it to the query (adjust according to your filtering logic)
        if (filter) {
            query.someField = filter; // Replace 'someField' with the actual field you want to filter on
        }

        // Calculate the number of documents to skip
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const sortOptions = { [sortBy]: sortOrder === 'asc' ? 1 : -1 };

        // Execute the query with pagination, search, and filter
        const [data, count] = await Promise.all([
            Models.Feeds.find(query)
              .populate({ path: 'userId' })
              .skip(skip)
              .limit(parseInt(limit))
              .sort(sortOptions),
            Models.Feeds.countDocuments(query)
          ]);

        // Send the response
        let response={
            data,
            total: count,
            page: parseInt(page),
            totalPages: Math.ceil(count / parseInt(limit))
        }
        // const data = await Models.Feeds.find({isDeleted:false}).populate({ path: "userId" });
        successResponse(res, "GetFeed", response);
    } catch (error) {
        console.log(error, '==err');
        errorResponse(res, "error", error.message);
    }
};

export const CreateFeed = async (req, res) => {
    try {
        const data = req.body
        if (_.isEmpty(data)) {
            return successError(res, "payload", {});
        }
        await Models.Feeds.create(data)
        successResponse(res, "Feed Created", {});
    } catch (error) {
        console.log(error, '==err');
        errorResponse(res, "error", error.message);
    }
}

export const updateFeed = async (req, res) => {
    try {
        const payload = req.body
        if (_.isEmpty(payload)) {
            return successError(res, "payload", {});
        }
        const id = req.query.id
        const updateResponse = await Models.Feeds.findByIdAndUpdate(id, payload,{new:true})
        successResponse(res, "Feed Updated",updateResponse );
    } catch (error) {
        console.log(error)
        errorResponse(res, "error", error.message);

    }
}

export const deleteFeed = async (req, res) => {
    try {
        const id = req.query.id
        if(!id){
            return successError(res, "payload", {});
        }
        // const updateResponse = await Models.Feeds.findByIdAndUpdate(id, {isDeleted:true},{new:true})
        const updateResponse = await Models.Feeds.findByIdAndRemove(id, {isDeleted:true},{new:true})
        successResponse(res, "Feed Deleted",updateResponse );
    } catch (error) {
        console.log(error)
        errorResponse(res, "error", error.message);
    }
}
