import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upVote, downVote } from '../utils/api';
import { updatePost } from '../actions';

class VoteButtons extends Component {
  render() {
    const { voteType, id } = this.props

    return (
      <div className="vote-buttons">
        <div className="vote-buttons" onClick={ () => {
          upVote(id).then( p => {
            this.props.dispatch(updatePost(p))
          })
        }}>⬆</div>
        <div className="vote-buttons" onClick={ () => {
          downVote(id).then( p => {
            this.props.dispatch(updatePost(p))
          })
        }}>⬇</div>
      </div>
    );
  }
}

export default connect()(VoteButtons);
