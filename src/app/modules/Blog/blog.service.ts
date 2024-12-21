
import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import User from "../User/user.model";
import { IBlog } from "./blog.interface";
import Blog from "./blog.model";

const createBlogIntoDB = async(payload : IBlog , email : string) => {
   
const author = await User.findOne({email : email});
if(!author) {
    throw new AppError(StatusCodes.NOT_FOUND, "author not found")
}

const newBlog = {...payload , author: author._id}
   
const result = await Blog.create(newBlog);
const blogResponse = {
    _id : result._id,
    title : result.title,
    content : result.content,
    author
}


return blogResponse;
}

export const BlogService = {
    createBlogIntoDB
}