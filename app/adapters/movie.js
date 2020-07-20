import RESTAdapter from '@ember-data/adapter/rest';

import config from '../config/environment';

export default RESTAdapter.extend({

    host: 'https://api.themoviedb.org',
    namespace: `${config.TMDB.api_namespace_movie}`,


    pathForType() {
        return `popular?api_key=${config.TMDB.api_key}`;
    }


});