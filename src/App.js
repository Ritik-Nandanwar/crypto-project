import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Single from "./Components/Single";
import bg from "./assets/bg.jpg";
import Navbar from "./Components/Navbar";
import { Container } from "@mui/material";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
