import React, { useState } from 'react';
import '../style/components/projects.css';

const Projects = () => {
  const ProjectsData = [
    {
      id: 1,
      img: "assets/asianTaste.png",
      title: "Asian Taste",
      description: "This is the description for Project One, showcasing its features and technologies used.",
      liveLink: "https://asian-taste-one.vercel.app/"
    },
    {
      id: 2,
      img: "assets/trendify.png",
      title: "Trendify Store",
      description: "Description for Project Two, focusing on solving a specific problem.",
      liveLink: "https://trendify-frontend-nine.vercel.app/"
    },
    {
      id: 3,
      img: "assets/okyWebcraft.png",
      title: "Oky-webcraft",
      description: "Project Three is a tool designed to improve user productivity.",
      liveLink: "https://oky-webcraft.vercel.app/"
    }
  ];
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const handleToggleView = () => {
    setShowAll(!showAll);
    setVisibleProjects(showAll ? 3 : ProjectsData.length);
  };

  return (
    <section id="projects" className="projects-section">
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
