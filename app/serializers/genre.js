import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, payload.genres, id, requestType);
  }
});