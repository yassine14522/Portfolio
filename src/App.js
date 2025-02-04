import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./components/hero";
import Contact from "./components/contact";
import About from "./components/about";
import Expertise from "./components/expertise";
import Projects from "./components/projects";
import Profile from "./pages/profile"; // Import the Profile component
import Services from "./components/services"; // Import the Profile component

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Expertise />
              <Services />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
