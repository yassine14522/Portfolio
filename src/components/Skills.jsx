import React, { useContext } from "react";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaLaravel,
  FaGitAlt,
  FaShopify,
  FaWordpress,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import "../style/components/skills.css";


export default function Skills() {

  return (
    <div id="skills" className="skills-container">
      <h2 className="skills-title">S k i l l s<span></span></h2>
      <div className="technical-skills">
        {/* First Row */}
        <div className="skill">
          <FaReact className="skill-icon" />
          <p>ReactJS</p>
        </div>
        <div className="skill">
          <FaHtml5 className="skill-icon" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FaCss3Alt className="skill-icon" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <FaJs className="skill-icon" />
          <p>JavaScript</p>
        </div>

        {/* Second Row */}
        <div className="skill">
          <FaBootstrap className="skill-icon" />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <SiTailwindcss className="skill-icon" />
          <p>Tailwind CSS</p>
        </div>
        <div className="skill">
          <SiExpress className="skill-icon" />
          <p>Express.js</p>
        </div>
        <div className="skill">
          <FaNodeJs className="skill-icon" />
          <p>Node.js</p>
        </div>

        {/* Third Row */}
        <div className="skill">
          <FaLaravel className="skill-icon" />
          <p>PHP/Laravel</p>
        </div>
        <div className="skill">
          <SiMongodb className="skill-icon" />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <SiMysql className="skill-icon" />
          <p>MySQL</p>
        </div>

        {/* Fourth Row */}
        <div className="skill">
          <FaWordpress className="skill-icon" />
          <p>WordPress</p>
        </div>
        <div className="skill">
          <FaShopify className="skill-icon" />
          <p>Shopify</p>
        </div>
        <div className="skill">
          <FaGitAlt className="skill-icon" />
          <p>Version Control (Git)</p>
        </div>
      </div>
    </div>
  );
}
