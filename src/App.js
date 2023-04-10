import React from "react";
import "./App.css";
import MyNavbar from "./components/Navbar/MyNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import MySkills from "./pages/MySkills";
// import { Nav, NavBtnLink, NavLink, NavMenu } from "./components/Navbar/NavbarElements";




function App() {
    
  return (
    <Router>
      <MyNavbar />
      <Routes >
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-skills" element={<MySkills />} />
      </Routes>
    </Router>
  
  );
}

export default App;
