import { Model } from 'lux-framework';

class Author extends Model {
  static hasMany = {
    posts: {
      inverse: 'author'
    }
  };
}

export default Author;
