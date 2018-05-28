import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import "./EditPostForm.css";
import { updatePost } from "../utils/api";
import { closeEditPostForm, editPost } from "../actions";
import Button from "./common/Button";
import LabelledTextInput from "./common/LabelledTextInput";

const FormikForm = values => (
  <div className="EditPostForm">
    <h3>Edit Post</h3>
    <Form>
      <LabelledTextInput name="title" type="text" label="Title:" />
      <label htmlFor="body">Body:</label>
      <Field component="textarea" name="body" />
      <Button text="Update Post" />
    </Form>
  </div>
);

const EditPostForm = withFormik({
  mapPropsToValues({ post }) {
    return {
      title: post.title,
      body: post.body
    };
  },

  handleSubmit(values, { props }) {
    const { id } = props.post;
    const { title, body } = values;

    updatePost(id, { title: title, body: body }).then(post => {
      props.dispatch(editPost(post));
      props.dispatch(props.dispatch(closeEditPostForm(id)));
    });
  }
})(FormikForm);

function mapStateToProps(state, ownProps) {
  const post = state.posts[ownProps.id];

  return {
    post: post
  };
}

export default connect(mapStateToProps)(EditPostForm);
