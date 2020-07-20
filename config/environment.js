'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'movie-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }, 
    TMDB: {
      api_key: 'cb30ecbcb557b171232671908b517759',
      api_host: 'https://api.themoviedb.org',
      api_namespace_movie: '3/movie',
      api_namespace_genre: '3/genre/movie',
      api_namespace_search: '3/search',
      api_img_url: 'http://image.tmdb.org/t/p/w500/'
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' http://ember.dev:35729",
      'connect-src': "'self' ws://ember.dev:35729 http://api.themoviedb.org/ https://api.themoviedb.org/",
      'img-src': "'self' http://image.tmdb.org/ https://image.tmdb.org/",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
