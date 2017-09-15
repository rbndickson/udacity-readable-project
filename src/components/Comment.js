import React, { Component } from 'react';
import { connect } from 'react-redux';
import VoteButtons from './VoteButtons';
import { deleteComment } from '../utils/api';
import { removeComment } from '../actions';

class Comment extends Component {
  handleDelete = () => {
    deleteComment(this.props.comment.id).then((res) => {
      if (res && res.ok) {
        this.props.dispatch(removeComment(this.props.comment));
      }
    })
  }

  render() {
    const { comment } = this.props;

    return (
      <div className="post-parent">
        <div>
          <div className="post-score">
            {comment.voteScore}
          </div>
          <VoteButtons voteType='comment' id={comment.id}/>
        </div>
        <div className="post-body">
          {comment.body}
        </div>
        <p className="post-author">
          Posted by {comment.author}
        </p>
        <p className="post-date">
          {new Date(comment.timestamp).toDateString()} at {new Date(comment.timestamp).toLocaleTimeString()}
        </p>
        <button onClick={ this.handleDelete }>Delete Comment</button>
        <hr/>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return { comment: state.comments[ownProps.id] }
}

export default connect(mapStateToProps)(Comment);
