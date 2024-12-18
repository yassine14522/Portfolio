import React , {useContext} from 'react';
import "./home.css"
import photoP from '../assets/photo.jpg'
import { FaGithub, FaLinkedin ,FaLanguage} from 'react-icons/fa';
import { ThemeContext } from "../App";

// You can import icons here if you're using a library like Font Awesome, React Icons, etc.
// Example: import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`home-container ${theme}`}>
            {/* Hero Section with Text on the Left */}
            <section className="hero">
                <div className="hero-text">
                    <h1 className='name'>Hi I'm Yassine</h1>
                    <h2 className='username'>Web Developer</h2>
                    <p className='paragraphe'>
                        I am a passionate web developer skilled in modern technologies<br /> like React, Node.js,
                        and more. Let's build something amazing together!
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="cta-buttons">
                        <button onClick={() => window.location.href = 'mailto:yassinechadani113@gmail.com'}>Contact Me</button>
                        <button>
                            <a href="/cv.pdf" download="Echadani_Yassine_CV.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Download CV
                            </a>
                        </button>
                    </div>

                    {/* Social Media Icons */}
                    <div className="social-icons">
                        <a href="https://github.com/yassine14522" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub size={30} style={{ color: 'orange', margin: '0 10px' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/yassine-echadani-5904b8268" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin size={30} style={{ color: 'orange', margin: '0 10px' }} />
                        </a>
                    </div>

                </div>

                {/* Image Section on the Right */}
                <div className="hero-image">
                    <img src={photoP} alt="Your name or relevant description" className="profile-image" />
                </div>

                <div className="arrow-container">
                    <span className="arrow">&#8595;</span>
                </div>
            </section>
        </div>
    );
}
