import { Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;
  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }
  search(blogTitle: string) {
    const search = this.query.search;

    if (search) {
      this.modelQuery = this.modelQuery.find({
        [blogTitle]: { $regex: search, $options: 'i' },
      });
    }
    return this;
  }
  
}

export default QueryBuilder;
