import { Formik } from "formik";
import React, { useState } from "react";

function ContactForm() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const handleValidate = (values) => {
    let erros = {};
    if (!values.name) {
      erros.name = "Required";
    }
    if (!values.email) {
      erros.email = "Required";
    } else if (!REGEX.email.test(values.email)) {
      erros.email = "Invalid Email Address";
    }
    if (!values.phone) {
      erros.phone = "Required";
    }
    return erros;
  };
  const handleSubmit = () => {
    alert("Contact has been successfully added. Great job!");
  };
  return (
    <div class="container mx-auto py-10">
      <h3 className="text-4xl text-center pb-6 font-bold">Contact Form</h3>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleChange, values }) => (
          <form onSubmit={handleSubmit} class="max-w-md mx-auto">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                class="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.name && (
                <div
                  class="text-red-500 text-xs italic "
                  style={{ fontSize: "15px" }}
                >
                  {errors.name}
                </div>
              )}
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="email">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                class="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && (
                <div
                  class="text-red-500 text-xs italic "
                  style={{ fontSize: "15px" }}
                >
                  {errors.email}
                </div>
              )}
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="phone">
                Phone:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                class="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.phone && (
                <div
                  class="text-red-500 text-xs italic "
                  style={{ fontSize: "15px" }}
                >
                  {errors.phone}
                </div>
              )}
            </div>

            <div class="mb-6">
              <label class="block text-gray-700 font-bold mb-2" for="message">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                class="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
