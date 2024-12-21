import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from './../../utils/sendResponse';
import { BlogService } from './blog.service';
import AppError from './../../errors/AppError';

const createBlog = catchAsync(async (req, res) => {
    if(!req.user){
        throw new AppError(StatusCodes.NOT_FOUND , "User not found");
    }

    const {email} = req.user;
   

  const result = await BlogService.createBlogIntoDB( req.body , email);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Blog created successfully',
    data: result,
  });
});

export const BlogController = {
  createBlog,
};
