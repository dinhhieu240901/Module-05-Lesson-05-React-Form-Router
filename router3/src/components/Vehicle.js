import React from "react";
import { Link, useLocation } from "react-router-dom";

function Vehicle() {
  const location = useLocation();
  const categoryId = location.state.categoryId;

  return (
    <div>
      <h1>Vehicles Page</h1>    
      <p>Category ID: {categoryId}</p>
      <Link to="/category">Back to Category</Link>
    </div>
  );
}

export default Vehicle;
