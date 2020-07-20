import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get } from '@ember/object';

module('Unit | Model | movie', function(hooks) {
  setupTest(hooks);

  test('should own genre', function(assert) {
    const Movie = this.owner.lookup('service:store').modelFor('movie');

    // lookup the relationship on the movie model
    const relationship = get(Movie, 'relationshipsByName').get('genres');

    assert.equal(relationship.key, 'genres', 'has relationship with genre');
    assert.equal(
      relationship.kind,
      'hasMany',
      'kind of relationship is hasMany'
    );
  });
});