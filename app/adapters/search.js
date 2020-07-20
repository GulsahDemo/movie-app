import RESTAdapter from '@ember-data/adapter/rest';

import config from '../config/environment';

const host = 'https://api.themoviedb.org/';
const namespace = `${config.TMDB.api_namespace_search}/`;  

export default RESTAdapter.extend({

    urlForQuery (query, modelName) { 
        return `${host}${namespace}movie?api_key=${config.TMDB.api_key}`;
    }



});