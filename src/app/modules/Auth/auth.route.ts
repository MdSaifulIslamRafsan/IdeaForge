
import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post('/login', validateRequest(AuthValidation.loginUserValidation) ,   AuthController.loginUser )

export const AuthRoutes =  router;