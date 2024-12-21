import { Response } from "express";

 interface IResponse<T>{
     success: boolean;
     statusCodes: number;
     message?: string;
     data: T;
 }


const sendResponse = <T>(res : Response, data : IResponse<T>) => {
    res.status(data?.statusCodes).send({
        success: data?.success,
        message: data?.message,
        data: data?.data,
    })
}

export default sendResponse;