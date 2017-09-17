import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upVotePost, downVotePost, upVoteComment, downVoteComment } from '../utils/api';
import { editPost, updateComment } from '../actions';

class VoteButtons extends Component {
  handleUpvote = () => {
    this.props.voteType === 'post'
    ? upVotePost(this.props.id).then(post => {
       this.props.dispatch(editPost(post))
      })
    : upVoteComment(this.props.id).then(comment => {
        this.props.dispatch(updateComment(comment))
      })
  }

  handleDownvote = () => {
    this.props.voteType === 'post'
    ? downVotePost(this.props.id).then(post => {
        this.props.dispatch(editPost(post))
      })
    : downVoteComment(this.props.id).then(comment => {
        this.props.dispatch(updateComment(comment))
      })
  }

  render() {
    return (
      <div className="vote-buttons">
        <div className="vote-buttons" onClick={this.handleUpvote}>⬆</div>
        <div className="vote-buttons" onClick={this.handleDownvote}>⬇</div>
      </div>
    );
  }
}

export default connect()(VoteButtons);
