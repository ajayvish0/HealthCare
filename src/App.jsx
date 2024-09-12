import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// home route must be protected only authenticated user can access it
