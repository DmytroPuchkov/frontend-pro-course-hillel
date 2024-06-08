import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from './ValidationSchema';

const registrationForm = () => {
  const initialValues = {
    firstName: '',
    email: '',
    phone: '',
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="firstName">Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default registrationForm;