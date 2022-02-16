import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import { Typography } from "@mui/material";
import Single from "./Components/Single";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
