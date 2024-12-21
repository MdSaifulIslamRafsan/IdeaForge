import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt"
import { ILoginUser } from "./auth.interface";
import User from "../User/user.model";
import AppError from "../../errors/AppError";
const loginUserFromDB = async(payload : ILoginUser)=>{

    const {email , password} = payload;

    const isUserExist = await User.findOne({email}).select("+password");
    if(!isUserExist) {
        throw new AppError(StatusCodes.NOT_FOUND, 'User not found')
    }
 

    const userStatus = isUserExist?.isBlocked;
    if(userStatus) {
        throw new AppError(StatusCodes.FORBIDDEN, 'User is blocked')
    }
    const isValidPassword =  bcrypt.compare(password, isUserExist.password);

    if(!isValidPassword){
        throw new AppError(StatusCodes.FORBIDDEN, 'Invalid password')
    }


    

    return {

    };
}

export const AuthService = {
    loginUserFromDB
}