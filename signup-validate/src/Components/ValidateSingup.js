import React, { useState } from "react";

function ValidateSingup() {
  const MESSAGE_ERROR = {
    username: "Username error",
    email: "Email error",
    password: "Password error",
    confirmPassword: "Confirm Password must be the same",
  };
  const REGEX = {
    username: /^[a-zA-Z]{2,}$/,
    email: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/,
  };
  const [form, setform] = useState({});
  function handleChange(event) {
    let error = "";
    if (event.target.name === "password") {
      if (form.confirmPassword && form.confirmPassword.value) {
        error =
          event.target.value === form.confirmPassword.value
            ? ""
            : MESSAGE_ERROR[event.target.name];
      } else {
        error = REGEX[event.target.name].test(event.target.value)
          ? ""
          : MESSAGE_ERROR[event.target.name];
      }
    } else if (event.target.name === "confirmPassword") {
      error =
        event.target.value === form.password.value
          ? ""
          : MESSAGE_ERROR[event.target.name];
    } else {
      error = REGEX[event.target.name].test(event.target.value)
        ? ""
        : MESSAGE_ERROR[event.target.name];
    }
    setform({
      ...form,
      [event.target.name]: { value: event.target.value, error: error },
    });
  }
  function handleSubmit() {
    const isFilled =
      form.username &&
      form.username.value &&
      form.email &&
      form.email.value &&
      form.password &&
      form.password.value &&
      form.confirmPassword &&
      form.confirmPassword.value;
    const isError =
      isFilled &&
      (form.username.error ||
        form.email.error ||
        form.password.error ||
        form.confirmPassword.error);
    alert(
      isFilled && !isError
        ? "Sign up successfully"
        : "Please fill out all the fields"
    );
  }
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Sign up</h1>
      <form>
        {/* Username Field */}
        <div>
          <label className="block text-sm font-semibold mb-2">Username</label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 "
            name="username"
            value={(form.username && form.username.value) || ""}
            onChange={handleChange}
          />
          {form.username && form.username.error && (
            <p className="text-red-500 text-sm mt-1">{form.username.error}</p>
          )}
        </div>
        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 "
            name="email"
            value={(form.email && form.email.value) || ""}
            onChange={handleChange}
          />
          {form.email && form.email.error && (
            <p className="text-red-500 text-sm mt-1">{form.email.error}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 "
            name="password"
            value={(form.password && form.password.value) || ""}
            onChange={handleChange}
          />
          {form.password && form.password.error && (
            <p className="text-red-500 text-sm mt-1">{form.password.error}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Confirm password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 "
            name="confirmPassword"
            value={(form.confirmPassword && form.confirmPassword.value) || ""}
            onChange={handleChange}
          />
          {form.confirmPassword && form.confirmPassword.error && (
            <p className="text-red-500 text-sm mt-1">
              {form.confirmPassword.error}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ValidateSingup;
