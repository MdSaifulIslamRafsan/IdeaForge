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
  filter() {
    const queryObj = {...this.query}
    const excludedFields = ['search' ,'sort', 'sortOrder']
    excludedFields.forEach(field => delete queryObj[field])

    this.modelQuery = this.modelQuery.find(queryObj);

    return this;
  }
  sort() {
    const sortField = this.query.sort || 'title';
    const sortOrder = this.query.sortOrder === 'desc' ? -1 : 1;

    const sortQuery: Record<string, 1 | -1> = {
      [sortField as string]: sortOrder,
    };

    this.modelQuery = this.modelQuery.sort(sortQuery);
    return this;
  }
 
}

export default QueryBuilder;
