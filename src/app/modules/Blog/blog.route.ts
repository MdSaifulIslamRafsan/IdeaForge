
import express from 'express';
import { BlogController } from './blog.controller';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { BlogValidation } from './blog.validation';
import { UserRole } from '../User/user.constant';

const router = express.Router();

router.post('/', auth() , validateRequest(BlogValidation.createBlogValidation), BlogController.createBlog );
router.patch('/:id',validateRequest(BlogValidation.updateBlogValidation), auth() , BlogController.createBlog );

export const BlogRoutes =  router;