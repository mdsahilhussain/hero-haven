import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./form-section.models.css";
import * as Yup from "yup";
import { Button } from "../../../components";
import { Link } from "react-router-dom";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User name is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const SingUpFromSection: React.FC = () => {
  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <section className="from">
      <h3>
        Join the <span> Hero Haven</span> Community
      </h3>
      <h6>Enter your credentials to access your account </h6>
      <Formik
        initialValues={{
          userName: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="input-div">
            <label htmlFor="email">User Name</label>
            <div className="input-field">
              <Field
                type="text"
                id="userName"
                name="userName"
                placeholder="Enter your user name"
              />
            </div>
            <ErrorMessage
              name="userName"
              component="div"
              className="errorMsg"
            />
          </div>

          <div className="input___flexField">
            <div className="input-div">
              <label htmlFor="name">First Name</label>
              <div className="input-field">
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                />
              </div>
              <ErrorMessage
                name="firstName"
                component="div"
                className="errorMsg"
              />
            </div>
            <div className="input-div">
              <label htmlFor="name">Last Name</label>
              <div className="input-field">
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                />
              </div>
              <ErrorMessage
                name="lastName"
                component="div"
                className="errorMsg"
              />
            </div>
          </div>

          <div className="input-div">
            <label htmlFor="email">Email Address</label>
            <div className="input-field">
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>
            <ErrorMessage name="email" component="div" className="errorMsg" />
          </div>

          <div className="input___flexField">
            <div className="input-div">
              <label htmlFor="password">Password</label>
              <div className="input-field">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="errorMsg"
              />
            </div>

            <div className="input-div">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-field">
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Enter your confirm password"
                />
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="errorMsg"
              />
            </div>
          </div>

          <div style={{ marginTop: "1em" }}>
            <Button title="Sing Up" style={{ width: "100%" }} />
          </div>
        </Form>
      </Formik>
      <div className="from___or">
        <hr />
        <h6>or</h6> <hr />
      </div>
      <div className="from___otherAccount">
        <Button title="Google" style={{ width: "48%" }} />
        <Button title="GitHub" style={{ width: "48%" }} />
      </div>
      <h6>
        Don't have Account?
        <Link to=""></Link>
      </h6>
    </section>
  );
};

export default SingUpFromSection;
