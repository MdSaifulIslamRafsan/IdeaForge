
import express from 'express';
import { BlogController } from './blog.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post('/', auth() , BlogController.createBlog );
router.patch('/:id', auth() , BlogController.createBlog );

export const BlogRoutes =  router;