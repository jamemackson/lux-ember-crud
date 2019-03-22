import { Serializer } from 'lux-framework';

class AuthorsSerializer extends Serializer {
  attributes = [
    'name'
  ];

  hasMany = [
    'posts'
  ];
}

export default AuthorsSerializer;
