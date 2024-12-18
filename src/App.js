import React, { useState, createContext } from "react";
import "./App.css";
import Header from "./Header/header";
import Home from "./Home/home";
import Contact from "./Contact/contact";
import About from "./About/about";
import Skills from "./Skills/Skills";
import Projects from "./Projects/projects";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>
        <Header />
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
