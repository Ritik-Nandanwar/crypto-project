import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Single from "./Components/Single";
import bg from "./assets/bg.jpg";
import Navbar from "./Components/Navbar";
import { Container } from "@mui/material";
import Banner from "./Components/Banner";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner></Banner>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
