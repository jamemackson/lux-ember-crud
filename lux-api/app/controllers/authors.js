import { Controller } from 'lux-framework';

class AuthorsController extends Controller {
  params = [
    'posts',
    'name'
  ];
}

export default AuthorsController;
