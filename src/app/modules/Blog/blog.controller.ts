import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from './../../utils/sendResponse';
import { BlogService } from './blog.service';
import AppError from './../../errors/AppError';

const createBlog = catchAsync(async (req, res) => {
  if (!req.user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }

  const { _id } = req.user;

  const result = await BlogService.createBlogIntoDB(req.body, _id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Blog created successfully',
    data: result,
  });
});

const getALLBlogs = catchAsync(async (req , res) =>{
  const result = await BlogService.getALLBlogFromDB(req.query);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blogs fetched successfully',
    data: result,
  })
})

const updateBlog = catchAsync(async (req, res) => {
  const { id: blogId } = req.params;
  const blogData = req.body;
  if (!req.user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }

  const { _id: userId } = req.user;
  const result = await BlogService.updateBlogIntoDB(blogData, blogId, userId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blog updated successfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id: blogId } = req.params;
  if (!req.user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }

  const { _id: userId } = req.user;

   await BlogService.deleteBlogFromDB(blogId, userId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blog deleted successfully',
  });
});

export const BlogController = {
  createBlog,
  updateBlog,
  deleteBlog,
  getALLBlogs
};
