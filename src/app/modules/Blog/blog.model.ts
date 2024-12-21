import { model, Schema } from 'mongoose';
import { IBlog } from './blog.interface';

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);



blogSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

blogSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

blogSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

const Blog = model<IBlog>('Blog', blogSchema);
export default Blog;
