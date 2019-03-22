import { Model } from 'lux-framework';

class Post extends Model {
  static belongsTo = {
    author: {
      inverse: 'posts'
    }
  };
}

export default Post;
