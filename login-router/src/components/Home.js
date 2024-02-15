import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      Welcome {state.email} ! You are now logged in.
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
