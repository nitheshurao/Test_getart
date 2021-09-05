import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,

    file: String,
    tags: String,
    meta: String,
    detail: String,


    // likeCount: {
    //     type: Number,
    //     default: 0
    // },
    createdAt: {
        type: Date,
        default: new Date(),
    }


});

const PostProduct = mongoose.model('PostProduct', postSchema);


export default PostProduct;