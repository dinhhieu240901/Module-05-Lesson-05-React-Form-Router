import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const MESSAGE_ERROR = {
    email: "Email error",
    password: "Password error",
  };
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/,
  };
  const [form, setForm] = useState({});
  function handleChange(event) {
    let error = REGEX[event.target.name].test(event.target.value)
      ? ""
      : MESSAGE_ERROR[event.target.name];
    setForm({
      ...form,
      [event.target.name]: { value: event.target.value, error: error },
    });
  }
  function handleSubmit() {
    const isFilled =
      form.email && form.email.value && form.password && form.password.value;
    const isError = isFilled && (form.email.error || form.password.error);
    alert(
      isFilled && !isError
        ? "Đăng nhập thành công!!!"
        : "Vui lòng điền đầy đủ thông tin vào tất cả các trường!!!"
    );
  }
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Sign up</h1>
      <form>
        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
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

export default App;
