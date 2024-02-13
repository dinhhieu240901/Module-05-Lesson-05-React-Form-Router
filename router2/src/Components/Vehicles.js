import React from "react";
import { useParams } from "react-router-dom";

function Vehicles() {
  const { categoryId } = useParams();
  return (
    <div>
      <h1>Products in Category {categoryId}</h1>
      {/* Display products in the selected category */}
    </div>
  );
}

export default Vehicles;
