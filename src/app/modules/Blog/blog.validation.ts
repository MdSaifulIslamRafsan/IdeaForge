import { z } from 'zod';

const createBlogValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    content: z.string({
      required_error: 'Content is required',
    }),
    isPublished: z.boolean().optional(),
  }),
});
const updateBlogValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }).optional(),
    content: z.string({
      required_error: 'Content is required',
    }).optional(),
  }),
});

export const BlogValidation = {
  createBlogValidation,
  updateBlogValidation
};
