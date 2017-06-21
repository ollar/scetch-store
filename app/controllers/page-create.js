import Ember from 'ember';

export default Ember.Controller.extend({
  blocks: Ember.computed.alias('model.blocks'),
  actions: {
    addBlock() {
      const block = this.get('store').createRecord('block', {
        type: 'text',
        page: this.get('model'),
      });

      this.get('blocks').pushObject(block);
    },

    handleSubmit() {
      const page = this.get('store').createRecord('page', {
        title: this.get('title'),
        blocks: this.get('blocks'),
        dateCreated: new Date(),
        modified: new Date(),
      });

      this.get('blocks').forEach((block) => {
        block.save();
      });

      page.save().then(() => {
        this.send('notify', {
          type: 'success',
          text: this.get('i18n').t('messages.page_create_success'),
        });
        this.transitionToRoute('page', page);
      });
    }
  },
});