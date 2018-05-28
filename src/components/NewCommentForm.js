import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import "./NewCommentForm.css";
import { createComment } from "../utils/api";
import { createId } from "../utils/helpers";
import { addComment, closeNewCommentForm } from "../actions";
import Button from "./common/Button";
import LabelledTextInput from "./common/LabelledTextInput";

const FormikForm = ({ values }) => (
  <Form className="NewCommentForm">
    <LabelledTextInput name="author" type="text" label="Your Name:" />
    <label>
      Comment:
      <Field component="textarea" name="body" />
    </label>
    <Button text={"Add Comment"} />
  </Form>
);

const NewCommentForm = withFormik({
  mapPropsToValues() {
    return {
      author: "",
      body: ""
    };
  },

  handleSubmit(values, { props }) {
    createComment({
      id: createId(),
      parentId: props.postId,
      timestamp: Date.now(),
      author: values.author,
      body: values.body
    }).then(comment => {
      props.dispatch(addComment(comment));
      props.dispatch(closeNewCommentForm(props.postId));
    });
  }
})(FormikForm);

export default connect()(NewCommentForm);
