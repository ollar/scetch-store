import Ember from 'ember';
import BlockManageMixin from 'sketch-shop/mixins/block-manage';
import { module, test } from 'qunit';

module('Unit | Mixin | block manage');

// Replace this with your real tests.
test('it works', function(assert) {
  let BlockManageObject = Ember.Object.extend(BlockManageMixin);
  let subject = BlockManageObject.create();
  assert.ok(subject);
});
