import { combineReducers } from 'redux';
// Import the "reducer property" with an alias of "formReducer"
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts'

const rootReducer = combineReducers({
  posts: PostsReducer,
  // Important: assign to the key "form" - others reducers use this property
  form: formReducer
});

export default rootReducer;
