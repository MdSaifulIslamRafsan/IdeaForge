
import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import User from "../User/user.model";
import { IBlog } from "./blog.interface";
import Blog from "./blog.model";

const createBlogIntoDB = async(payload : IBlog , userId : string) => {
   
const author = await User.findById(userId);
if(!author) {
    throw new AppError(StatusCodes.NOT_FOUND, "author not found")
}

const newBlog = {...payload , author: author._id}
   
const result = await Blog.create(newBlog);
const blogResponse = {
    _id : result?._id,
    title : result?.title,
    content : result?.content,
    author
}


return blogResponse;
}

const updateBlogIntoDB = async(payload : IBlog ,  blogId: string , userId : string)=>{
    const isExistBlog = await Blog.findOne({_id : blogId , author : userId}).select('author -_id').populate('author');
if(!isExistBlog) {
    throw new AppError(StatusCodes.NOT_FOUND, "blog not found")
}
const result = await Blog.findByIdAndUpdate(blogId, payload , {new : true});
const blogResponse = { 
    _id : result?._id,
    title : result?.title,
    content : result?.content,
    author : isExistBlog?.author
}
return blogResponse;

}

export const BlogService = {
    createBlogIntoDB,
    updateBlogIntoDB
}