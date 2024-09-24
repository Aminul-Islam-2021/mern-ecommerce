class ProductFeatures {
    constructor(query, queryString) {
      this.query = query; // MongoDB query
      this.queryString = queryString; // Query params (search, sort, filter, etc.)
    }
  
    // Search by keyword (name)
    search() {
      if (this.queryString.search) {
        const keyword = this.queryString.search
          ? {
              name: {
                $regex: this.queryString.search,
                $options: 'i', // case-insensitive
              },
            }
          : {};
        this.query = this.query.find({ ...keyword });
      }
      return this;
    }
  
    // Filter by categories and other criteria (e.g., brand, rating, etc.)
    filter() {
      const queryCopy = { ...this.queryString };
      
      // Remove fields from the query that are not meant for filtering
      const removeFields = ['search', 'sort', 'page', 'limit'];
      removeFields.forEach((field) => delete queryCopy[field]);
  
      // Advanced filtering (e.g., price range, rating range)
      let queryStr = JSON.stringify(queryCopy);
      queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
      this.query = this.query.find(JSON.parse(queryStr));
      
      return this;
    }
  
    // Sort by fields (e.g., price, rating, etc.)
    sort() {
      if (this.queryString.sort) {
        const sortBy = this.queryString.sort.split(',').join(' ');
        this.query = this.query.sort(sortBy);
      } else {
        // Default sort by creation date (newest products first)
        this.query = this.query.sort('-createdAt');
      }
      return this;
    }
  
    // Pagination
    paginate(resultPerPage) {
      const page = this.queryString.page * 1 || 1; // Convert to number or default to 1
      const skip = resultPerPage * (page - 1);
  
      this.query = this.query.limit(resultPerPage).skip(skip);
      return this;
    }
  }
  
  module.exports = ProductFeatures;
  