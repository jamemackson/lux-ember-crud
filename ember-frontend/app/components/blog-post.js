import Component from '@ember/component';

export default Component.extend({
  isEditing: false,
  actions: {
    toggleEditing() {
      this.set('isEditing', !this.get('isEditing'));
    },
    saveEdits(post) {
      post.save();
      this.set('isEditing', false);
    },
    cancelEdits(post) {
      post.rollbackAttributes();
      this.set('isEditing', false);
    }
  }
});
