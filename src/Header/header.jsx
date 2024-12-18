import React, { useState } from 'react';
import './header.css';
import LOGO from '../assets/LOGO.png';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import React Icons

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item0">
                        <img src={LOGO} alt="Logo" className="logo" />
                    </li>
                    <li className="nav-item">
                        <button onClick={() => scrollToSection('home')}>Home</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => scrollToSection('about')}>About</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => scrollToSection('skills')}>Skills</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => scrollToSection('projects')}>Projects</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => scrollToSection('contact')}>Contact</button>
                    </li>
                    <li className="nav-item">
                        <button
                            style={{
                                marginLeft: "50px",
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px 20px',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                border: "none",
                                fontWeight: "bold"
                            }}
                            onClick={toggleDarkMode}
                        >
                            {/* Conditionally render icons based on dark mode */}
                            {isDarkMode ? <FaSun style={{ marginRight: '8px' }} /> : <FaMoon style={{ marginRight: '8px' }} />}
                            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
