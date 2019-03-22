import { Serializer } from 'lux-framework';

class PostsSerializer extends Serializer {
  attributes = [
    'title',
    'slug',
    'body'
  ];

  hasOne = [
    'author'
  ];
}

export default PostsSerializer;
