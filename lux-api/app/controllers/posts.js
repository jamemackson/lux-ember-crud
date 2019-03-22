import { Controller } from 'lux-framework';

class PostsController extends Controller {
  params = [
    'author',
    'title',
    'slug',
    'body'
  ];
}

export default PostsController;
