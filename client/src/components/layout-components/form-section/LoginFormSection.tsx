/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./form-section.models.css";
import * as Yup from "yup";
import { Button } from "../../../components";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsGoogle, BsGithub } from "react-icons/bs";
// Validation schema using Yup
const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User name is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormSection: React.FC = () => {
  const [passwordType, setPasswordType] = useState<string>("password");

  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log(values);
  };

  const onChangePasswordType = (value: string) => {
    if (value == "password") {
      setPasswordType(passwordType == "password" ? "text" : "password");
      return;
    }
  };

  return (
    <section className="from">
      <h3>
        Welcome to <span> Hero Haven</span> Community
      </h3>
      <h6>Unlock an Exceptional Website Experience</h6>
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="input-div">
            <label htmlFor="email">
              User Name <span className="required">*</span>
            </label>
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

          <div className="input-div">
            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>

            <div className="input-field">
              <Field
                type={passwordType}
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <span
                className="password_icon"
                onClick={() => onChangePasswordType("password")}
              >
                {passwordType == "text" ? (
                  <AiFillEye />
                ) : (
                  <AiFillEyeInvisible />
                )}
              </span>
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="errorMsg"
            />
          </div>

          <div style={{ marginTop: "1.5em" }}>
            <Button title="Log IN" style={{ width: "100%" }} />
          </div>
        </Form>
      </Formik>
      <div className="from___or">
        <hr />
        <h6>or</h6> <hr />
      </div>
      <div className="from___otherAccount">
        <Button title="Google" icon={<BsGoogle />} style={{ width: "48%" }} />
        <Button title="GitHub" icon={<BsGithub />} style={{ width: "48%" }} />
      </div>
      <h6 className="link">
        Don't have Account?
        <Link to="/register">Sing Up</Link>
      </h6>
    </section>
  );
};

export default LoginFormSection;
