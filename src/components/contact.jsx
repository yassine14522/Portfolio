import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import "../style/components/contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState({ success: false, error: "" });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://formspree.io/f/xldekvpq", formData);
            setStatus({ success: true, error: "" });
            setFormData({ name: "", email: "", message: "" }); // Reset form
        } catch (err) {
            setStatus({ success: false, error: "Error submitting form. Try again." });
        }
    };

    return (
        <div id="contact" className="contact-container">
            {/* Left Side */}
            <div className="contact-left">
                <h1 className="contact-title">
                    Contact <span className="highlight">Me</span>
                </h1>
                <p className="contact-description">
                    Have a question or want to work together? Reach out!
                </p>
                <div className="contact-icons">
                    <div className="contact-icon">
                        <FaEnvelope className="icon" />
                        <a href="mailto:yassinechadani113@gmail.com">yassinechadani113@gmail.com</a>
                    </div>
                    <div className="contact-icon">
                        <FaPhone className="icon" />
                        <a href="https://wa.me/212601710479" target="_blank" rel="noopener noreferrer">+212 6 01 71 04 79</a>
                    </div>
                    <div className="contact-icon">
                        <FaMapMarkerAlt className="icon" />
                        <span>Rabat, Morocco</span>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="social-icons">
                    <a href="https://github.com/yassine14522" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/yassine-echadani-5904b8268" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} className="social-icon" />
                    </a>
                </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-right">
                <form className="contact-form" onSubmit={handleSubmit}>
                    {["name", "email", "message"].map((field) => (
                        <div key={field} className="form-group">
                            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                            {field === "message" ? (
                                <textarea id={field} name={field} value={formData[field]} onChange={handleInputChange} required />
                            ) : (
                                <input type={field === "email" ? "email" : "text"} id={field} name={field} value={formData[field]} onChange={handleInputChange} required />
                            )}
                        </div>
                    ))}
                    <button type="submit" className="submit-button">Send Message</button>
                    {status.success && <p className="success">Message sent successfully!</p>}
                    {status.error && <p className="error">{status.error}</p>}
                </form>
            </div>
        </div>
    );
}
