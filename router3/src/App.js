import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vehicle from "./components/Vehicle";
import Category from "./components/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/category" element={<Category />} />

        <Route path="/vehicles" element={<Vehicle />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
