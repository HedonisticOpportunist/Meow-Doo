import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Bonus from "./pages/Bonus";
import Home from "./pages/Home";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <div className="header">
        <img className="logoImage" src={logo} alt="Meow-Doo Logo" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/bonus" element={<Bonus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
