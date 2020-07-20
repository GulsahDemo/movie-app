import DS from 'ember-data';
import {singularize} from 'ember-inflector';

export default DS.JSONSerializer.extend({
  normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, payload.results, id, requestType);
  },
  keyForRelationship(key, typeClass, method) {
    return `${singularize(key)}_ids`;
  }
});