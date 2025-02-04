import React from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaLaravel, FaGitAlt,
  FaShopify, FaWordpress, FaDocker
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiTailwindcss, SiExpress, SiKubernetes, SiFirebase } from "react-icons/si";
import "../style/components/skills.css";

const skillsData = [
  {
    category: "Front-End",
    skills: [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> }
    ]
  },
  {
    category: "Back-End",
    skills: [
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "PHP/Laravel", icon: <FaLaravel /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> }
    ]
  },
  {
    category: "E-Commerce",
    skills: [
      { name: "Shopify", icon: <FaShopify /> },
      { name: "WordPress", icon: <FaWordpress /> }
    ]
  }
];

export default function Expertise() {
  return (
    <div id="expertise" className="skills-container">
      <h2 className="skills-title">S k i l l s</h2>
      {skillsData.map((section, index) => (
        <div key={index} className="skills-section">
          <h3 className="skills-category">{section.category}</h3>
          <div className="skills-list">
            {section.skills.map((skill, idx) => (
              <div key={idx} className="skill">
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
