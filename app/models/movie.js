import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
    genres: hasMany('genre'),
    poster_path: attr('string'),
    adult: attr('boolean'),
    overview: attr('string'),
    release_date: attr('string'),
    original_title: attr('string'),
    original_language: attr('string'),
    title: attr('string'),
    backdrop_path: attr('string'),
    popularity: attr('number'),
    vote_count: attr('number'),
    video: attr('number'),
    vote_average: attr('number')
});