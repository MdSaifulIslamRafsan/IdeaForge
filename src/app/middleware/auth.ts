import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import  jwt, { JwtPayload }  from 'jsonwebtoken';
import config from '../config';


// middleware
const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]
    if(!token){
        throw new AppError(StatusCodes.UNAUTHORIZED , "User not authorized")
    }

    jwt.verify(token, config.jwt.secret as string , function(err, decoded) {
        if (err) {
            throw new AppError(StatusCodes.UNAUTHORIZED , "Invalid token")
        }
        req.user = decoded as JwtPayload ;
    })

next()
  });
};

export default auth;
