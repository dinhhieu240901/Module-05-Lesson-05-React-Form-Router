import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Formik } from "formik";

function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  const handleValidate = (values) => {
    let errors = {};
    if (!values.to) {
      errors.to = "Required";
    } else if (!REGEX.email.test(values.to)) {
      errors.to = "Invalid email address";
    }

    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  };
  const handleSubmit = (values) => {
    alert("Sent successfully!!!");
  };
  return (
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <h3 class="text-xl font-medium text-black">Mail Form</h3>
        <Formik
          initialValues={{ to: "", title: "", message: "", file: null }}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({ errors, values, handleChange, setFieldValue, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="to" class="block text-sm font-medium text-gray-700">
                  To :
                </label>
                <input
                  type="text"
                  name="to"
                  id="to"
                  onChange={handleChange}
                  value={values.to}
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md"
                  style={{ border: "1px solid #3333 " }}
                />
                {errors.to && (
                  <div class="text-red-500 text-sm">{errors.to}</div>
                )}
              </div>

              <div class="form-group">
                <label
                  for="title"
                  class="block text-sm font-medium text-gray-700"
                >
                  Title :
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={handleChange}
                  value={values.title}
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  style={{ border: "1px solid #3333 " }}
                ></input>
                {errors.title && (
                  <div class="text-red-500 text-sm">{errors.title}</div>
                )}
              </div>

              <div class="form-group">
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700"
                >
                  Message :
                </label>
                <textarea
                  rows={5}
                  cols={40}
                  name="message"
                  id="message"
                  onChange={handleChange}
                  value={values.message}
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  style={{ border: "1px solid #3333 " }}
                ></textarea>
                {errors.message && (
                  <div class="text-red-500 text-sm">{errors.message}</div>
                )}
              </div>

              <div class="form-group">
                <label
                  for="upload-file"
                  class="block text-sm font-medium text-gray-700"
                >
                  Upload File :
                </label>
                <input
                  type="file"
                  name="uploadFile"
                  id="upload-file"
                  accept=".jpg,.png,.gif"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <button
                type="submit"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 my-6 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Send Mail
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
