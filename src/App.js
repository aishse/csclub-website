import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import About from "./components/About.js";
import Navigationbar from "./components/Navbar";
import HeroPage from "./components/HeroSection";
import Events from "./components/Events";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Navigate to="/main-menu" />} />
          <Route path="/about" element={<About />} />
          <Route path="/main-menu" element={<HeroPage />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
