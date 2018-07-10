import React, { Component } from 'react';
import { Field, reduxForm } from 'react-form';

class PostsNew extends Component {
  render() {
    return(
      <form>
        <Field
          name="title"
          component={}
        />
      </form>
    );
  }
}

// the function passed to reduxForm is something similar to the
// mapStateToProps in the connect function
export default reduxForm({
  form: 'PostsNewForm'    // has to be an unique string
                          // so react-form can handle multiple forms
                          // I can use this string elsewhere, and the state will be merged
})(PostsNew);
