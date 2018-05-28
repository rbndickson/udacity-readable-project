import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import { updateComment } from "../utils/api";
import { closeEditCommentForm, editComment } from "../actions";
import Button from "./common/Button";

const FormikForm = ({ values }) => (
  <Form>
    <Field component="textarea" name="body" />
    <Button text={"Update Comment"} />
  </Form>
);

const EditCommentForm = withFormik({
  mapPropsToValues({ comment }) {
    return {
      body: comment.body
    };
  },

  handleSubmit(values, { props }) {
    const { dispatch, comment } = props;

    updateComment(comment.id, { body: values.body }).then(updatedComment => {
      dispatch(editComment(updatedComment));
      dispatch(closeEditCommentForm(comment.id));
    });
  }
})(FormikForm);

function mapStateToProps(state, ownProps) {
  return {
    comment: state.comments[ownProps.id],
    body: state.editCommentForms[ownProps.id].body
  };
}

export default connect(mapStateToProps)(EditCommentForm);
