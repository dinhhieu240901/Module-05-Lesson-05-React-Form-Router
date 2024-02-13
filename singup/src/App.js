import "./App.css";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({});

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isValid =
      form.username && form.email && form.password && form.confirmPassword;
    alert(isValid ? "Sign up successsfully" : "Please fill out all the fields");
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <div className="custom-input">
          <label>Username </label>
          <input
            name="username"
            value={form.username || ""}
            onChange={handleChange}
          />
        </div>
        <div className="custom-input">
          <label>Email </label>
          <input name="email" value={form.email | ""} onChange={handleChange} />
        </div>
        <div className="custom-input">
          <label>Password </label>
          <input
            type="password"
            name="password"
            value={form.password || ""}
            onChange={handleChange}
          />
        </div>
        <div className="custom-input">
          <label>Confirm password </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
