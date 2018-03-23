import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

// for the first time it runs, we're going to default state to an empty object
export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // If I did this here
      //console.log(action.payload.data);     // I'd get [ post1, post2 ]
      // I want to transform this into
      // something like { id: post }
      // E.g. { 4: post }
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
};
