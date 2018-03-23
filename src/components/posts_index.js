import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  // Will be called by React once the Component is shown on the DOM
  componentDidMount() {
    // So we will fetch data here
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

// In the past, we used matchDispathToProps()
// null here is mapStateToProps
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
// with es6 this can be written like this
export default connect(null, { fetchPosts })(PostsIndex);
