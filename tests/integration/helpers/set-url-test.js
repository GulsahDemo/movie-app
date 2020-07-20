import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | setUrl', function(hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('should return full url', async function(assert) {
    this.set('inputValue', '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg');

    await render(hbs`{{set-url inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'http://image.tmdb.org/t/p/w500//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg');
  });

  test('shold return non-image', async function(assert) {
    this.set('inputValue', undefined);

    await render(hbs`{{set-url inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'assets/images/no_image.svg');
  });
});
