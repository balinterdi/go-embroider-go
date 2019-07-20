import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('App loads fine on index', async function(assert) {
    await visit('/');
    assert.equal(4, 2+2, '2 plus 2 is four');
  });
});
