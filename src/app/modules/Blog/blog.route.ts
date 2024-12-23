
import express from 'express';
import { BlogController } from './blog.controller';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { BlogValidation } from './blog.validation';
import { UserRole } from '../User/user.constant';

const router = express.Router();

router.post('/', auth(UserRole.user) , validateRequest(BlogValidation.createBlogValidation), BlogController.createBlog );
router.patch('/:id',validateRequest(BlogValidation.updateBlogValidation), auth(UserRole.user) , BlogController.updateBlog );
router.delete('/:id', auth(UserRole.user) , BlogController.deleteBlog );
router.get('/', BlogController.getALLBlogs)
 
export const BlogRoutes =  router;