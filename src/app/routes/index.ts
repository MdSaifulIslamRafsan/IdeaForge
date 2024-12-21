import express from 'express';
import { AuthRouter } from '../modules/User/user.route';

const router = express.Router();

const  modulesRoutes = [
    {
        path: '/auth',
        router : AuthRouter ,
    }
]

modulesRoutes.forEach(route => router.use(route.path , route.router));



export default router;