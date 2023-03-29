import logo from "./logo.svg";
import "./App.css";

import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Services";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Register from "./Register";
import Form from "./Form";
import Box from "./Components/Box";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div style={{ display: "flex", height: "100vh" }}>
          <Sidebar />
          <Form />
          <div className="Box">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Service" element={<Service />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
