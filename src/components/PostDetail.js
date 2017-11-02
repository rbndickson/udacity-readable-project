import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../utils/api';
import { addPost } from '../actions';
import Post from './Post';
import CommentList from './CommentList';

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
            {this.props.hasComments && (
              <CommentList id={post.id}/>
            )}
          </article>
        )}
      </main>
    );
  }
}

function mapStateToProps (state, ownProps) {
  const postId = ownProps.match.params.post;
  const comment_keys = Object.keys(state.comments);
  const comments = comment_keys
    .map(comment_key => state.comments[comment_key])
    .filter(comment => comment.parentId === postId)
    .filter(comment => comment.deleted === false);
  const hasComments = comments.length > 0;

  return {
    post: state.posts[postId],
    hasComments: hasComments
  }
}

export default connect(mapStateToProps)(PostDetail);
