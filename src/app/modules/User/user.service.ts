import { StatusCodes } from "http-status-codes"
import AppError from "../../errors/AppError"
import { IUser } from "./user.interface"
import User from "./user.model"


const createUserIntoDB = async(payload : IUser) => {

    const isExistUser = await User.findOne({email: payload.email})

    if(isExistUser){
        throw new AppError(StatusCodes.CONFLICT ,"User already exists")
    }



const result = await User.create(payload);

const newUser = {
    _id : result?._id,
    name : result?.name,
    email : result?.email,
}


return newUser;
}

export const UserService = {
    createUserIntoDB,
}