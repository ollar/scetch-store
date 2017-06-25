import Ember from 'ember';
import destroyModel from '../../utils/destroy-model';

export default Ember.Controller.extend({
  fileStorage: Ember.inject.service(),

  actions: {
    removeCategory() {
      if (this.get('model.images.length')) {
        this.get('model.images').forEach((imageModel) => {
          this.get('fileStorage').remove(imageModel);
        });
      }

      destroyModel(this.get('model'), ['images', 'blocks'])
        .then(() => {
          this.send('notify', {
            type: 'info',
            text: this.get('i18n').t('messages.category_removed_success'),
          });
          this.transitionToRoute('categories');
        });
    }
  }
});
