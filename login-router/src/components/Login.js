import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    if (
      loginInfo.email === "admin@gmail.com" &&
      loginInfo.password === "12345"
    ) {
      navigate("/home", { state: { email: loginInfo.email } });
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={handleChange}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        id="password"
        onChange={handleChange}
      ></input>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
