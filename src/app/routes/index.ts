import express from 'express';
import { RegisterRoutes } from '../modules/User/user.route';
import { AuthRoutes } from '../modules/Auth/auth.route';

const router = express.Router();

const  modulesRoutes = [
    {
        path: '/auth',
        router : RegisterRoutes ,
    },
    {
        path: '/auth',
        router : AuthRoutes ,
    },
]

modulesRoutes.forEach(route => router.use(route.path , route.router));



export default router;