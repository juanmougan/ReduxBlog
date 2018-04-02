import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  // Will be called by React once the Component is shown on the DOM
  componentDidMount() {
    // So we will fetch data here
    this.props.fetchPosts();
  }

  renderPosts() {
    // Using lodash because this.props.posts is an object, not an array
    // so it doesn't have a map() function built in
    return _.map(this.props.posts, post => {
      return(
        <li className = "list-group-item" key = {post.id}>
          {post.title}
        </li>
      )
    });
  }

  render() {
    // Renders twice: once without the posts
    // and then, when the promise is resolved, it's re-rendered with
    // the data from the API
    return (
      <div>
        <div>
          <div className = "text-xs-right">
            {/* The "to" property is a String pointing to the Route the user */}
            {/* will navigate when clicking the link */}
            <Link className = "btn btn-primary" to = "/posts/new">
              Add a Post
            </Link>
          </div>
        </div>
        <h3>Posts</h3>
        <ul className = "list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// In the past, we used matchDispathToProps()
// null here is mapStateToProps
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
// with es6 this can be written like this

// update: removed null as the first parameter, because now is mapStateToProps
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
