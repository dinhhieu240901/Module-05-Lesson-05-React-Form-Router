import React from "react";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();
  const handleChange = (event) => {
    const categoryId = event.target.value;
    navigate("/vehicles", { state: { categoryId } });
  };
  return (
    <div>
      <h2>Select a Category:</h2>
      <select defaultValue="default" onChange={handleChange}>
        <option value="default" disabled hidden>
          Choose your car
        </option>
        <option value="1">Honda</option>
        <option value="2">Suzuki</option>
        <option value="3">Yamaha</option>
      </select>
    </div>
  );
}

export default Category;
