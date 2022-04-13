import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Col,
  FormControl,
  FormLabel,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const [params] = useState({
    username: "",
    password: "",
  });

  // From reducer
  const UI = useSelector((state) => state.UI);

  const loginSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <React.Fragment>
      <div className="d-flex flex-column flex-fill justify-content-center">
        <div className="container">
          <div className="align-self-center rounded p-5 bg-white">
            <h5 className="text-center mb-0 fw-normal">Login</h5>
            <Formik
              initialValues={{ ...params }}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
              enableReinitialize={true}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => {
                return (
                  <Form
                    name="login"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className="mt-5"
                  >
                    <Row>
                      <Col sm="12" ms="12" lg="12">
                        <div className="input-group form-floating">
                          <FormControl
                            type="text"
                            className="border-end-0"
                            id="floatingInput"
                            placeholder="Letty Oliver"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <FormLabel htmlFor="floatingInput">
                            Username
                          </FormLabel>
                          <span
                            className="input-group-text border-start-0"
                            id="basic-addon2"
                          >
                            <i className="bi bi-person fa-lg align-self-center" />
                          </span>
                        </div>
                        {errors.username && touched.username ? (
                          <div
                            className="help-block text-warn"
                            style={{ color: "#d15a5a" }}
                          >
                            {errors.username}
                          </div>
                        ) : null}
                      </Col>
                      <Col sm="12" ms="12" lg="12">
                        <div className="input-group form-floating">
                          <FormControl
                            type="password"
                            className="border-end-0"
                            id="floatingInput"
                            placeholder="******"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <FormLabel htmlFor="floatingInput">
                            Password
                          </FormLabel>
                          <span
                            className="input-group-text border-start-0"
                            id="basic-addon2"
                          >
                            <i className="bi bi-lock fa-lg align-self-center" />
                          </span>
                        </div>
                        {errors.password && touched.password ? (
                          <div
                            className="help-block text-warn"
                            style={{ color: "#d15a5a" }}
                          >
                            {errors.password}
                          </div>
                        ) : null}
                      </Col>
                    </Row>
                    <Link
                      to=""
                      className="align-self-center text-info text-decoration-none"
                    >
                      Forgot password?
                    </Link>
                    <div className="d-flex justify-content-evenly mt-4 pt-2">
                      <Link
                        to="signup"
                        className="btn btn-outline-primary btn-lg fw-medium"
                      >
                        Signup
                      </Link>
                      <Button
                        type="submit"
                        variant="primary"
                        className="btn-lg fw-medium"
                        disabled={UI.loading}
                      >
                        Login
                        {UI.loading && (
                          <i className="fa fa-spinner fa-spin"></i>
                        )}
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
