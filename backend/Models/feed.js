
import mongoose from 'mongoose';

const FeedSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId , ref:"User" },
    title:{type:String},
    link:{type:String},
    description:{type:String},
    location :{type:String},
    isDeleted:{type:Boolean, default:false}
}, {
    timestamps: true
})


const Feed = mongoose.model('Feed', FeedSchema);
export default Feed