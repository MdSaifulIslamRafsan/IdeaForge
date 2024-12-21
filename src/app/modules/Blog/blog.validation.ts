import { z } from 'zod';

const createBlogValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    content: z.string({
      required_error: 'Content is required',
    }),
    author: z.string({
      required_error: 'Author is required',
    }),
    isPublished: z.boolean().optional(),
  }),
});

export const BlogValidation = {
  createBlogValidation,
};
