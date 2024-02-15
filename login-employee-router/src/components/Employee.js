import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Employee() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const employees = [
    {
      id: "1",
      name: "Hoa",
      age: "20",
    },
    {
      id: 2,
      name: "Khánh",
      age: 25,
    },
    {
      id: 3,
      name: "Tú",
      age: 22,
    },
  ];

  const handleDetail = (employee) => {
    navigate(`/employee/${employee.id}`, { state: { employee } });
  };

  return (
    <div>
      <h2>Welcome {state.email}</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
                <button onClick={() => handleDetail(employee)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
