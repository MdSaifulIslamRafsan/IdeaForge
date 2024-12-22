import express from 'express';
import { AdminController } from './admin.controller';
import auth from '../../middleware/auth';
import { UserRole } from '../User/user.constant';

const router = express.Router();

router.patch('/users/:userId/block', auth(UserRole.admin) , AdminController.userBlocked )

router.delete('/blogs/:id' , auth(UserRole.admin) , AdminController.deleteBlog)



export const AdminRoutes = router;