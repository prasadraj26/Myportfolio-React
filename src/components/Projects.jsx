import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: "Bulkers Manufacturer Website",
      year: "2025",
      description: "Developed a dynamic company website featuring service listings and business information. Integrated a backend-supported Request a Quote module to collect, store, and manage customer inquiries efficiently.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://sr-bulkers-preview.netlify.app/",
      github: "https://github.com/prasadraj26/SR-Bulkers-Website"
    },
    {
      title: "Parkinson's Disease Prediction",
      year: "2024",
      description: "Developed a machine learning model to predict Parkinson's disease using handwriting data. Achieved 85% classification accuracy using supervised learning techniques.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      link: "#",
      github: "https://github.com/yourusername/parkinsons-prediction"
    },
    {
      title: "Hospital Management Website",
      year: "2024",
      description: "Designed and developed a web-based application to streamline hospital operations. Implemented separate user logins with well-defined authentication, structured routing, and improved user experience.",
      tech: ["React", "Node.js", "MySQL", "JWT"],
      link: "#",
      github: "https://github.com/yourusername/hospital-management"
    }
  ];
  
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Here are some of my recent projects</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>
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
      </div>
    </section>
  );
}

export default Projects;