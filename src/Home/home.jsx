import React, { useState, useEffect } from 'react';
import "./home.css";
import photoP from '../assets/photo.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
    const [hoverText, setHoverText] = useState({});


    const names = [
        { text: "Yassine", color: "orange" },
        { text: "Echadani", color: "red" }
    ]; // Names and their respective colors
    const [currentNameIndex, setCurrentNameIndex] = useState(0); // Index of the current name
    const [displayName, setDisplayName] = useState(""); // Current displayed text
    const [isRemoving, setIsRemoving] = useState(false); // Whether the text is being removed

    useEffect(() => {
        let interval;
        let index = isRemoving ? names[currentNameIndex].text.length : -1; // Start at full length if removing

        const animate = () => {
            interval = setInterval(() => {
                if (isRemoving) {
                    // Removing text
                    setDisplayName((prev) => prev.slice(0, -1));
                    index--;

                    // When fully removed, switch to next name
                    if (index < 0) {
                        clearInterval(interval);
                        setIsRemoving(false);
                        setCurrentNameIndex((prev) => (prev + 1) % names.length);
                    }
                } else {
                    // Generating text
                    setDisplayName((prev) => prev + names[currentNameIndex].text.charAt(index));
                    index++;

                    // When fully generated, start removing after a delay
                    if (index >= names[currentNameIndex].text.length) {
                        clearInterval(interval);
                        setTimeout(() => setIsRemoving(true), 1000); // Delay before removing
                    }
                }
            }, 100); // Speed of typing/removing
        };

        animate();

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [isRemoving, currentNameIndex]);

    const startTypingEffect = (button, text) => {
        let index = -1;
        setHoverText((prev) => ({ ...prev, [button]: "" })); // Clear previous text

        const interval = setInterval(() => {
            setHoverText((prev) => ({
                ...prev,
                [button]: prev[button] + text.charAt(index), // Update text for current button
            }));
            index++;

            if (index >= text.length) clearInterval(interval);
        }, 100); // Adjust speed here (100ms per letter)
    };

    return (
        <div className="home-container">
            <section className="hero">
                <div className="hero-text">
                    <h1
                        className="name"
                        style={{ color: names[currentNameIndex].color }}
                    ><span style={{ color: "black" }}>Hi I`m </span>{displayName}
                    </h1>
                    <h2 className="username">Web Developer</h2>
                    <p className="paragraphe">
                        I am a passionate web developer skilled in modern technologies like React, Node.js,
                        and more. Let's build something amazing together!
                    </p>

                    <div className="cta-buttons">
                        {/* Contact Me Button */}
                        <button
                            onMouseEnter={() => startTypingEffect("contact", "Contact Me")}
                            onMouseLeave={() => setHoverText((prev) => ({ ...prev, contact: "" }))}
                        >
                            {hoverText.contact ? hoverText.contact : "Contact Me"}
                        </button>

                        {/* Download CV Button */}
                        <button
                            onMouseEnter={() => startTypingEffect("cv", "Download CV")}
                            onMouseLeave={() => setHoverText((prev) => ({ ...prev, cv: "" }))}
                        >
                            {hoverText.cv ? hoverText.cv : (
                                <a
                                    href="/cv.pdf"
                                    download="Echadani_Yassine_CV.pdf"
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    Download CV
                                </a>
                            )}
                        </button>
                    </div>
                    <div className="social-icons">
                        <a href="https://github.com/yassine14522" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub size={30} style={{ color: 'orange', margin: '0 10px' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/yassine-echadani-5904b8268" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin size={30} style={{ color: 'orange', margin: '0 10px' }} />
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={photoP} alt="Profile" className="profile-image" />
                </div>

                <div className="arrow-container">
                    <span className="arrow">&#8595;</span>
                </div>
            </section>
        </div>
    );
}
