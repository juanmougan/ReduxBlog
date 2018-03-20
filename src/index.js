import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';

// redux-promise as a middleware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//path is: if the user goes to this path, I'll show this component
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path = "/" component = {PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
