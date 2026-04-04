import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce website with cart functionality and payment integration",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      link: "#",
      github: "https://github.com/prasadraj26"
    },
    {
      title: "Portfolio Website",
      description: "Modern and responsive portfolio website with animated background",
      tech: ["React", "CSS3", "Framer Motion"],
      link: "#",
      github: "https://github.com/prasadraj26"
    },
    {
      title: "Task Management App",
      description: "Productivity app for managing tasks and projects with real-time updates",
      tech: ["React", "Firebase", "Material-UI"],
      link: "#",
      github: "https://github.com/prasadraj26"
    }
  ];
  
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>Here are some of my recent projects</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fa-brands fa-github"></i> Code
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fa-solid fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;