import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register.jsx";
import Forgot from "../pages/Forgot.jsx";
import Reset from "../pages/Reset.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />}/>
      <Route path="/forgot" element={<Forgot />}/>
      <Route path="/reset/:token" element={<Reset />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
