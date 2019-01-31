import React from "react";
import { Formik, Field, Form } from "formik";

const Search = ({ searchMovies }) => (
  <Formik
    initialValues={{
      term: ""
    }}
    onSubmit={(values, { setSubmitting }) => {
      searchMovies(values.term)
        .then(() => {
          setSubmitting(false);
        })
        .catch(console.error);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type="text" name="term" />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

export default Search;
