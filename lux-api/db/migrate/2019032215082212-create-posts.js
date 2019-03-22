export function up(schema) {
  return schema.createTable('posts', table => {
    table.increments('id');
    table.integer('author_id').index();
    table.string('title');
    table.string('slug');
    table.text('body');
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('posts');
}
