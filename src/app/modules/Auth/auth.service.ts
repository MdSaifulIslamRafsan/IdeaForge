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
        throw new AppError(StatusCodes.NOT_FOUND, 'User not found')
    }
 

    const userStatus = isUserExist?.isBlocked;
    if(userStatus) {
        throw new AppError(StatusCodes.FORBIDDEN, 'User is blocked')
    }
    const isValidPassword =  bcrypt.compare(payload?.password, isUserExist.password);

    if(!isValidPassword){
        throw new AppError(StatusCodes.FORBIDDEN, 'Invalid password')
    }

    const jwtPayload = {
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