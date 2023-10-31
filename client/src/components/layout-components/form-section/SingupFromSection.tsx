/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../../../components";
import { Link } from "react-router-dom";
import { BsGoogle, BsGithub } from "react-icons/bs";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { useAxios } from "../../../hooks/useAxios";
import { useToast, Spinner } from "@chakra-ui/react";

import "./form-section.models.css";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("User name is required")
    .matches(/^\S*$/, "User name should not contain spaces"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one symbol, one number, and one capital letter"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

type ErrorObject = {
  error: string;
};

type ResponseObject = {
  msg: string;
};

const SingUpFromSection: React.FC = () => {
  const [confirmPasswordType, setConfirmPasswordType] =
    useState<string>("password");
  const [passwordType, setPasswordType] = useState<string>("password");

  const toast = useToast();

  const { response, loading, error, request } = useAxios();
  const handleSubmit = (values: any) => {
    // Handle form submission
    const { username, firstName, lastName, email, confirmPassword } = values;
    const payload = {
      username,
      firstName,
      lastName,
      email,
      password: confirmPassword,
    };
    request({
      method: "POST",
      url: "/api/register ",
      headers: {
        // no need to stringify
        accept: "*/*",
      },
      data: payload,
    });

    if (error) {
      toast({
        title: "Error",
        description: (error as ErrorObject)?.error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    if (response) {
      toast({
        title: "Error",
        description: (error as ErrorObject)?.error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const onChangePasswordType = (value: string) => {
    if (value == "password") {
      setPasswordType(passwordType == "password" ? "text" : "password");
      return;
    }
    if (value == "confirmPassword") {
      setConfirmPasswordType(
        confirmPasswordType == "password" ? "text" : "password"
      );
      return;
    }
  };

  return (
    <section className="from">
      <h3>
        Join the <span> Hero Haven</span> Community
      </h3>
      <h6>Enter your credentials to access your account. </h6>
      <Formik
        initialValues={{
          username: "",
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
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <label htmlFor="password">
                User Name <span className="required">*</span>
              </label>
              <div className="tooltip">
                <AiFillQuestionCircle style={{ marginBottom: "-2px" }} />
                <span className="tooltipText glassmorphism">
                  <h6>User name should not contain spaces.</h6>
                </span>
              </div>
            </div>
            <div className="input-field">
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your user name"
              />
            </div>
            <ErrorMessage
              name="username"
              component="div"
              className="errorMsg"
            />
          </div>

          <div className="input___flexField">
            <div className="input-div">
              <label htmlFor="name">
                First Name <span className="required">*</span>
              </label>

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
              <label htmlFor="name">
                Last Name <span className="required">*</span>
              </label>
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
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>

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
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <label htmlFor="password">
                  Password <span className="required">*</span>
                </label>
                <div className="tooltip">
                  <AiFillQuestionCircle style={{ marginBottom: "-2px" }} />
                  <span className="tooltipText glassmorphism">
                    <h6>Password must be at least 8 characters long.</h6>
                    <h6>Password must contain at least one symbol.</h6>
                    <h6>Password must contain at least one number.</h6>
                    <h6>Password must contain at least one capital letter. </h6>
                  </span>
                </div>
              </div>

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

            <div className="input-div">
              <label htmlFor="confirmPassword">
                Confirm Password <span className="required">*</span>
              </label>

              <div className="input-field">
                <Field
                  type={confirmPasswordType}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Enter your confirm password"
                />
                <span
                  className="password_icon"
                  onClick={() => onChangePasswordType("confirmPassword")}
                >
                  {confirmPasswordType == "text" ? (
                    <AiFillEye />
                  ) : (
                    <AiFillEyeInvisible />
                  )}
                </span>
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="errorMsg"
              />
            </div>
          </div>

          <div style={{ marginTop: "1em" }}>
            <Button type="submit" icon={loading && <Spinner color="white" />} title={loading?"":"Sing Up"} style={{ width: "100%" }} />
          </div>
        </Form>
      </Formik>
      <div className="from___or">
        <hr /> <h6>or</h6> <hr />
      </div>
      <div className="from___otherAccount">
        <Button title="Google" icon={<BsGoogle />} style={{ width: "48%" }} />
        <Button title="GitHub" icon={<BsGithub />} style={{ width: "48%" }} />
      </div>
      <h6 className="link">
        Already have an Account?
        <Link to="/login">Log in</Link>
      </h6>
    </section>
  );
};

export default SingUpFromSection;
