import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';


export const FormIkForm = () => {
  const formIk = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },

    // ************custom validation****************

    // validate: (values) => {
    //   let error = {};
    //   if (!values.email) error.email = "Email is Required";
    //   if (!values.password) error.password = "Password is Required";
    //   return error;
    // }


    //  ************validation with Yup****************

    validationSchema: yup.object({
        email: yup.string().email().required('This field is required.'),
        password: yup.string()
        .min(6, 'Password is too short.')
        .max(12, 'Password is too long.')
        .required('This field is required.')
    })
  });
  return (
    <div>
      <h1>FormIkFrom</h1>
      <form onSubmit={formIk.handleSubmit}>
        <label>Email</label><br/>
        {formIk.errors.email ? <>{formIk.errors.email}</> : ""}
        <br />

        <input
          onChange={formIk.handleChange}
          value={formIk.values.email}
          type="text"
          id="email"
        ></input>
        <br />
        <br />
        <label>Password</label>
        <br />
        {formIk.errors.password ? <>{formIk.errors.password}</> : ""}
        <br />
        <input
          type="password"
          id="password"
          onChange={formIk.handleChange}
          value={formIk.values.password}
        ></input>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
