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
      loginInfo.password === "letmein"
    ) {
      navigate("/employee", { state: { email: loginInfo.email } });
    } else {
      alert("Invalid credentinals");
    }
  };
  return (
    <div>
      <label htmlFor="email">Email Address:</label>
      <br />
      <input type="text" id="email" name="email" onChange={handleChange} />
      <br />
      <label htmlFor="pwd">Password:</label>
      <br />
      <input
        type="password"
        id="pwd"
        name="password"
        onChange={handleChange}
      ></input>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
