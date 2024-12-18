import React, { useState, useContext } from 'react';
import './projects.css';
import ProjectsData from './data';
import { ThemeContext } from '../App';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showAll, setShowAll] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleToggleView = () => {
    setShowAll(!showAll);
    setVisibleProjects(showAll ? 3 : ProjectsData.length);
  };

  return (
    <section id="projects" className={`projects-section ${theme}`}>
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-container">
        {ProjectsData.slice(0, visibleProjects).map((project) => (
          <div key={project.id} className="project-card">

            <h3 className="project-title">{project.title}</h3>

            <img className="project-image" src={project.img} alt={`${project.title} screenshot`} />

            <p className="project-description">{project.description}</p>

            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live</a>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn" onClick={handleToggleView}>
        {showAll ? 'Show Less' : 'Show All Projects'}
      </button>
    </section>
  );
};

export default Projects;
