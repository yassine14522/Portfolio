import React, { useState, useEffect, useRef } from "react";
import "../style/components/header.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.facebook.com/profile.php?id=61572773007779#", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://www.instagram.com/oky_webcraft/", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://www.linkedin.com/company/106179526", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: "https://wa.me/+212717923103", icon: <FaWhatsapp />, label: "WhatsApp" },
];

const navItems = [
  { path: "/", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#services", label: "Services" },
  { path: "#portfolio", label: "Realisation" },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  const toggleNav = (e) => {
    e.stopPropagation();
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setIsNavOpen(false);
    };

    if (isNavOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isNavOpen]);

  return (
    <header className="header-container">
      <a href="/" className={`logo-container ${isNavOpen ? "hide-logo" : ""}`}>
        <img src="assets/logo.png" className="imageLogo" alt="OKY Logo" />
      </a>

      <div className="hamburger" onClick={toggleNav}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className={`bar ${isNavOpen ? "active" : ""}`} />
        ))}
      </div>

      <nav ref={navRef} className={`navigation ${isNavOpen ? "nav-open" : ""}`} onClick={(e) => e.stopPropagation()}>
        <ul className="nav-list">
          {navItems.map(({ path, label }) => (
            <li key={label} className="nav-item">
              <a href={path} className="nav-link" onClick={() => setIsNavOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Extra Content */}
        <div className="mobile-extra">
          <div className="numPhone">+212 771473306</div>
          <img src="assets/logoMobill.png" className="imageLogoMobill" alt="OKY Logo" />
          <ul className="header-links">
            {socialLinks.map(({ href, icon, label }, index) => (
              <li key={index}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="header-link">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
