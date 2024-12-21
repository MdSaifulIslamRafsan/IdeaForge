import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt"
import { ILoginUser } from "./auth.interface";
import User from "../User/user.model";
import AppError from "../../errors/AppError";
import jwt from "jsonwebtoken"
import config from "../../config";
const loginUserFromDB = async(payload : ILoginUser)=>{

   

    const isUserExist = await User.findOne({email: payload.email}).select("+password");
    if(!isUserExist) {
        throw new AppError(StatusCodes.NOT_FOUND, 'Invalid credentials')
    }
 

    const userStatus = isUserExist?.isBlocked;
    if(userStatus) {
        throw new AppError(StatusCodes.FORBIDDEN, 'Invalid credentials')
    }

    const isValidPassword =await bcrypt.compare(payload?.password, isUserExist.password);

    if(!isValidPassword){
        throw new AppError(StatusCodes.FORBIDDEN, 'Invalid credentials')
    }

    const jwtPayload = {
        _id : isUserExist._id, 
        email : isUserExist.email,
        role: isUserExist.role,   
    }

    const accessToken = jwt.sign(jwtPayload, config.jwt.secret as string , { expiresIn: 60 * 60 })

    

    return {
       token: accessToken
    };
}

export const AuthService = {
    loginUserFromDB
}