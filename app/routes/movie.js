import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      genres: this.store.findAll('genre'),
      movies: this.store.findAll('movie')
    }).then(x => x.movies);
  }
});