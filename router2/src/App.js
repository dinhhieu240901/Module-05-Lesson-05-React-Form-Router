import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./Components/Category";
import Vehicles from "./Components/Vehicles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />}>
          {" "}
        </Route>
        <Route path="/vehicle/:categoryId" element={<Vehicles />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
