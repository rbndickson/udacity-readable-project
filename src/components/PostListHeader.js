import React, { Component } from "react";
import { connect } from "react-redux";
import { capitalize } from "../utils/helpers";
import { openNewPostForm, closeNewPostForm } from "../actions";
import Button from "./common/Button";
import PostListHeaderSelect from "./PostListHeaderSelect";
import NewPost from "./NewPost";

class PostListHeader extends Component {
  handleOpenNewPostForm = e => {
    e.preventDefault();
    this.props.dispatch(openNewPostForm());
  };

  handleCloseNewPostForm = e => {
    e.preventDefault();
    this.props.dispatch(closeNewPostForm());
  };

  render() {
    return (
      <div className="container">
        <h2>{capitalize(this.props.categoryName)}</h2>
        <div className="row">
          <div className="column column-25">
            <PostListHeaderSelect />
          </div>
          <div className="column colum-50">
            <div className="float-right">
              {this.props.newPostFormOpen ? (
                <Button
                  text={"Close"}
                  mods={["secondary"]}
                  onClick={this.handleCloseNewPostForm}
                />
              ) : (
                <Button
                  text={"Add Post"}
                  onClick={this.handleOpenNewPostForm}
                />
              )}
            </div>
          </div>
        </div>
        {this.props.newPostFormOpen && <NewPost />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categoryName: state.categoryFilter,
    newPostFormOpen: state.newPostForm.newPostFormOpen
  };
}

export default connect(mapStateToProps)(PostListHeader);
