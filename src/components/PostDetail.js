import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../utils/api';
import { addPost } from '../actions';
import Post from './Post';

class PostDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.post;

    getPost(id).then((post) => {
      this.props.dispatch(addPost(post));
    });
  }

  render() {
    const { post } = this.props;

    return (
      <main>
        {post && (
          <article key={post.id} className="post">
            <Post id={post.id}/>
          </article>
        )}
      </main>
    );
  }
}

function mapStateToProps (state, ownProps) {
  const id = ownProps.match.params.post
  return { post: state.posts[id], }
}

export default connect(mapStateToProps)(PostDetail);
