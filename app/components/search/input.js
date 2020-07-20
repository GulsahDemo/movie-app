import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    handleSearch() {
      this.sendAction('handleSearch', this.get('query'));
      this.element.querySelector('.search-input__link').click();
    }
  }
});