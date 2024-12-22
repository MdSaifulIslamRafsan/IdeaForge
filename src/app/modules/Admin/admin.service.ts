import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import User from '../User/user.model';
import Blog from '../Blog/blog.model';

const BlockedUserFromDB = async (id: string) => {
  const isUserExist = await User.findById(id);
  if (!isUserExist) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }
  const result = await User.findByIdAndUpdate(
    id,
    { isBlocked: true },
    { new: true },
  );
  return result;
};
const deleteBlogFromDB = async (id: string) => {
  const isBlogExist = await Blog.findById(id);
  if (!isBlogExist) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Blog not found');
  }
  const result = await Blog.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const AdminService = {
  BlockedUserFromDB,
  deleteBlogFromDB
};
