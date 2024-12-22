import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminService } from "./admin.service";

const userBlocked = catchAsync(async(req, res)=>{
    const {userId} = req.params;

     await AdminService.BlockedUserFromDB(userId);

    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "User blocked successfully",
    })

 
})
const deleteBlog = catchAsync(async(req, res)=>{
    const {id} = req.params;

     await AdminService.deleteBlogFromDB(id);

    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Blog deleted successfully",
    })

 
})

export const AdminController = {
    userBlocked,
    deleteBlog
}