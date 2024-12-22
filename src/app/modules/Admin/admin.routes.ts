import express from 'express';
import { AdminController } from './admin.controller';

const router = express.Router();

router.patch('/users/:userId/block' , AdminController.userBlocked )



export const AdminRoutes = router;