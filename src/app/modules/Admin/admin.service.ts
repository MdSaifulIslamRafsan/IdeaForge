import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import User from '../User/user.model';

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

export const AdminService = {
  BlockedUserFromDB,
};
