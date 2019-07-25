import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);
  setupMirageTest(hooks);

  test('App loads fine on index', async function(assert) {
    await visit('/');
    assert.equal(4, 2+2, '2 plus 2 is four');
  });

  test('User name is shown', async function(assert) {
    this.server.logging = true;
    this.server.create('user', { name: 'Hikaru Nakamura' });
    await visit('/');
    assert.equal(document.getElementById('user-name').innerText, 'Hikaru Nakamura');
  });
});
