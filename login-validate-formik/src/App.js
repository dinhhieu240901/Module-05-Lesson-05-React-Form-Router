// Import các thư viện cần thiết
import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css"; // Import file App.css

// Khởi tạo biến REGEX
const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

// Khai báo biến form và setForm bằng hàm useState()
const App = () => {
  const [form, setForm] = useState({});

  // Khởi tạo hàm handleChange
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Khởi tạo hàm handleValidate
  const handleValidate = (values) => {
    let errors = {};

    // Kiểm tra email
    if (!values.email || values.email.trim() === "") {
      errors.email = "Required";
    } else if (!REGEX.email.test(values.email)) {
      errors.email = "Invalid email address";
    }

    // Kiểm tra password
    if (!values.password || values.password.trim() === "") {
      errors.password = "Required";
    }

    return errors;
  };

  // Khởi tạo hàm handleSubmit
  const handleSubmit = () => {
    alert("Login successfully!");
  };

  // Hàm return trả về JSX thể hiện form Login
  return (
    <div class="container mx-auto p-8">
      <h1 class="text-2xl font-bold mb-4 text-center">Đăng ký</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit, values, handleChange }) => (
          <form class="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
              />
              <p
                class="text-red-500 text-xs italic "
                style={{ fontSize: "15px" }}
              >
                {errors.email}
              </p>
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Mật khẩu
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                value={values.password || ""}
                onChange={handleChange}
              />
              <p
                class="text-red-500 text-xs italic "
                style={{ fontSize: "15px" }}
              >
                {errors.password}
              </p>
            </div>
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Gửi
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default App;
