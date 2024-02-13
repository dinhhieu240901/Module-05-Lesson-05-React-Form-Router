import React from "react";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();
  const handleSelect = (event) => {
    navigate(`/vehicle/${event.target.value}`);
  };

  return (
    <div>
      <h2>Select a Car</h2>
      <select defaultValue="default" onChange={handleSelect}>
        <option value="default">Please select a category</option>
        <option value="1">Honda</option>
        <option value="2">Suzuki</option>
        <option value="3">Yamaha</option>
      </select>
    </div>
  );
}

export default Category;
