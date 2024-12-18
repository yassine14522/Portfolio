import React, { useState, useContext } from "react";
import "./about.css"; // Make sure to create and import the CSS file
import photoAbout from '../assets/photo.jpg'
import { FaLanguage } from 'react-icons/fa';
import { ThemeContext } from "../App";



export default function About() {
    const [isFrench, setIsFrench] = useState(false);

    const handleTranslate = () => {
        setIsFrench(!isFrench); // Toggle between English and French
    };
    const { theme } = useContext(ThemeContext);

    return (
        <div id="about" className={`about-container ${theme}`}>
            <section className="about-section">
                <div className="about-image_container">
                    <img src={photoAbout} alt="About_Photo" className="about-image" />
                </div>
                <div className="about-text">
                    <h1 className="about-title">About Me</h1>
                    <h2 className="about-role">Full Stack Developer<span className="typing-symbol">|</span></h2>
                    <p className="about-description">
                        {isFrench
                            ? "Je suis un développeur Full Stack dynamique, spécialisé dans le développement front-end et back-end. Compétent dans des technologies comme ReactJS, Node.js, Express, PHP/Laravel, et les bases de données SQL/NoSQL, je combine créativité et expertise technique pour offrir des solutions performantes. Proactif, organisé et un joueur d'équipe fort, je suis toujours prêt à relever de nouveaux défis et à contribuer à des projets ambitieux."
                            : "I am a dynamic Full Stack Developer specializing in both front-end and back-end web development. Proficient in technologies like ReactJS, Node.js, Express, PHP/Laravel, and SQL/NoSQL databases, I combine creativity and technical expertise to deliver high-performance solutions. Proactive, organized, and a strong team player, I am always ready to take on new challenges and contribute to ambitious projects."
                        }
                        <FaLanguage className="language-icon" onClick={handleTranslate} />
                    </p>
                    <button className="contact-button">Contact Me</button>
                </div>
            </section>
        </div>
    );
}
