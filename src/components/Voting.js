import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upVotePost, downVotePost, upVoteComment, downVoteComment } from '../utils/api';
import { editPost, editComment } from '../actions';

class Voting extends Component {
  handleUpvote = () => {
    this.props.voteType === 'post'
    ? upVotePost(this.props.id).then(post => {this.props.editPost(post)})
    : upVoteComment(this.props.id).then(comment => {this.props.editComment(comment)})
  }

  handleDownvote = () => {
    this.props.voteType === 'post'
    ? downVotePost(this.props.id).then(post => {this.props.editPost(post)})
    : downVoteComment(this.props.id).then(comment => {this.props.editComment(comment)})
  }

  render() {
    return (
      <div className="card-voting">
        <div className="vote-button upvote-button" onClick={this.handleUpvote} />
        <div className="vote-score">
          {this.props.voteScore}
        </div>
        <div className="vote-button downvote-button" onClick={this.handleDownvote} />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    editComment: (comment) => dispatch(editComment(comment)),
    editPost: (post) => dispatch(editPost(post)),
  }
}

export default connect(null, mapDispatchToProps)(Voting);
