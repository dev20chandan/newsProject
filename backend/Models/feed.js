
import mongoose from 'mongoose';

const FeedSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId , ref:"User" },
    description:{type:String},
    location :{type:String}
}, {
    timestamps: true
})


const Feed = mongoose.model('Feed', FeedSchema);
export default Feed