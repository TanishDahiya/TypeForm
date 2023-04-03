import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../utils/css/body.css";

const SignupForm = () => {
  return (
    <div className="formParent">
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="formDiv">
              <div className="formDiv2">
                <div>
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div>
                  <Field
                    name="firstName"
                    type="text"
                    className={
                      errors.firstName && touched.firstName ? "error" : ""
                    }
                  />
                </div>

                <ErrorMessage name="firstName" />
              </div>
              <div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                </div>
                <div>
                  <Field
                    name="lastName"
                    type="text"
                    className={
                      errors.lastName && touched.lastName ? "error" : ""
                    }
                  />
                </div>

                <ErrorMessage name="lastName" />
              </div>
              <div>
                <div>
                  <label htmlFor="email">Email Address</label>
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    className={errors.email && touched.email ? "error" : ""}
                  />
                </div>
                <ErrorMessage name="email" />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
