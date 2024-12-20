import express from 'express';

const router = express.Router();

const  modulesRoutes = [
    {
        path: '/auth',
        router : ,
    }
]

modulesRoutes.forEach(route => router.use(route.path , route.router));



export default router;