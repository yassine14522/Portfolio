import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import Skills from "./components/Skills";
import Projects from "./components/projects";

function App() {

  return (
      <div className='app-container'>
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
  );
}

export default App;
