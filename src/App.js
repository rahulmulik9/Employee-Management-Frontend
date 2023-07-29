import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
