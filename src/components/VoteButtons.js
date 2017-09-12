import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upVotePost, downVotePost, upVoteComment, downVoteComment } from '../utils/api';
import { updatePost, updateComment } from '../actions';

class VoteButtons extends Component {
  render() {
    const { voteType, id } = this.props

    return (
      <div className="vote-buttons">
        <div className="vote-buttons" onClick={ () => {
          voteType === 'post'
          ? upVotePost(id).then(post => {
             this.props.dispatch(updatePost(post))
            })
          : upVoteComment(id).then(comment => {
              this.props.dispatch(updateComment(comment))
            })
        }}>⬆</div>
        <div className="vote-buttons" onClick={ () => {
          voteType === 'post'
          ? downVotePost(id).then(post => {
              this.props.dispatch(updatePost(post))
            })
          : downVoteComment(id).then(comment => {
              this.props.dispatch(updateComment(comment))
            })
        }}>⬇</div>
      </div>
    );
  }
}

export default connect()(VoteButtons);
