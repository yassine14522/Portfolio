import React, { useState, useContext } from "react";
import axios from "axios"; // Import Axios for POST requests
import { FaEnvelope, FaPhone, FaMapMarkerAlt,FaLinkedin,FaGithub } from "react-icons/fa"; // Example icons
import "../style/components/contact.css"; // Import your CSS styles for the contact form

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Define the Formspree endpoint
        const formEndpoint = "https://formspree.io/f/xldekvpq"; // Replace with your Formspree form endpoint

        // Send form data to Formspree using Axios
        axios
            .post(formEndpoint, formData)
            .then((response) => {
                console.log(response.data);
                setIsSubmitted(true); // Indicate that the form was submitted
                setFormData({ name: "", email: "", message: "" }); // Clear form data
            })
            .catch((error) => {
                console.error(error);
                setError("There was an error submitting the form. Please try again.");
                setIsSubmitted(false);
            });
    };

    return (
        <div id="contact" className="contact-container">
            <div className="contact-left">
                <h1 className="contact-title">Contact <span style={{color:"orange"}}>Me</span></h1>
                <p className="contact-description">
                    If you have any questions or would like to get in touch, feel free to reach out to me.
                </p>
                <div className="contact-icons">
                    <div className="contact-icon">
                        <FaEnvelope style={{color:"orange"}}/>
                        <span>Email : yassinechadani113@gmail.com</span>
                    </div>
                    <div className="contact-icon">
                        <FaPhone style={{color:"orange"}}/>
                        <span>Phone : +212 6 01 71 04 79</span>
                    </div>
                    <div className="contact-icon">
                        <FaMapMarkerAlt style={{color:"orange"}} />
                        <span>Location : Rabat, Morocco</span>
                    </div>
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

            <div className="contact-right">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">
                       Contact Me
                    </button>
                </form>
                {isSubmitted && <p>Message sent successfully!</p>}
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
}
