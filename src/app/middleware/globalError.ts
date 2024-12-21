import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler :ErrorRequestHandler = (err, req : Request , res : Response , next : NextFunction) => {
    const statusCode = err?.statusCode || 500;
    const errorMessage = err?.message ||  'Validation error';

    res.status(statusCode).send({
        "success": false,
        message : errorMessage,
        statusCode,
        error : err , 
        stack: err?.stack,

    })

};

export default globalErrorHandler;