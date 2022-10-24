import { useFormik } from "formik";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { schema } from "./schema";

function Login(props) {
  let path = useLocation().state?.pathname || "/";
  let navigate = useNavigate();
  function login(email) {
    localStorage.setItem("token", email);
    navigate(path);
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
  });
  return (
    <div className="row justify-content-center mt-5">
      <form
        onSubmit={formik.handleSubmit}
        className="form w-25 border p-4 mt-5"
      >
        <div class="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Email:</label>
          <input
            onBlur={formik.handleBlur}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <small style={{ color: "red" }}>{formik.errors.email}</small>
          ) : (
            ""
          )}
        </div>
        <div class="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <small style={{ color: "red" }}>{formik.errors.password}</small>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          onClick={() => login(formik.values.email)}
          className="btn btn-primary w-25   "
        >
          LogIn
        </button>
      </form>
    </div>
  );
}

export default Login;
