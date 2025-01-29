import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
  const [scrollingUp, setScrollingUp] = useState(true); // Track if user is scrolling up or down
  const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position

  // Scroll to a section with smooth scroll
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll behavior to hide or show header based on scroll direction
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Check if the user is scrolling up or down
    if (currentScrollY > lastScrollY) {
      setScrollingUp(false); // Scrolling down
    } else {
      setScrollingUp(true); // Scrolling up
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header-container ${!scrollingUp ? "hide-header" : ""}`}>
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/Products" className="nav-link">Products</a>
          </li>
          <li className="nav-item">
            <a 
              href="#About" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault(); 
                scrollToSection("About"); 
              }}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/Cart" className="nav-link">Cart</a>
          </li>
          <li className="nav-item">
            <a href="/Profile" className="nav-link">Profile</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
