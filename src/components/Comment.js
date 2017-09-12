import React, { Component } from 'react';
import { connect } from 'react-redux';
import VoteButtons from './VoteButtons';

class Comment extends Component {

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
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return { comment: state.comments[ownProps.id] }
}

export default connect(mapStateToProps)(Comment);
