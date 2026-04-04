import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const frontendSkills = [
    { name: 'HTML', icon: 'fa-brands fa-html5', color: '#E34F26' },
    { name: 'CSS', icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952B3' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
    { name: 'React', icon: 'fa-brands fa-react', color: '#61DAFB' }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#339933' },
    { name: 'Firebase', icon: 'fa-solid fa-fire', color: '#FFCA28' },
    { name: 'MongoDB', icon: 'fa-solid fa-database', color: '#47A248' },
    { name: 'Vercel', icon: 'fa-solid fa-cloud', color: '#000000' }
  ];

  const uiSkills = [
    { name: 'Figma', icon: 'fa-brands fa-figma', color: '#F24E1E' },
    { name: 'Canva', icon: 'fa-solid fa-palette', color: '#00C4CC' }
  ];

  const softSkills = [
    'Communication', 'Teamwork', 'Problem Solving', 
    'Time Management', 'Leadership', 'Adaptability'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-description">Here are some of my skills I possess.</p>
        
        <div className="skills-wrapper">
          {/* Technical Skills */}
          <div className="skills-block">
            <h3 className="skills-heading">
              <i className="fas fa-code"></i> Technical Skills:
            </h3>
            
            <div className="skill-category">
              <h4 className="category-title">
                <i className="fas fa-laptop-code"></i> Frontend:
              </h4>
              <div className="skills-icons-grid">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="skill-icon-card">
                    <i className={skill.icon} style={{ color: skill.color }}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h4 className="category-title">
                <i className="fas fa-server"></i> Backend:
              </h4>
              <div className="skills-icons-grid">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="skill-icon-card">
                    <i className={skill.icon} style={{ color: skill.color }}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h4 className="category-title">
                <i className="fas fa-paint-brush"></i> UI Tools:
              </h4>
              <div className="skills-icons-grid">
                {uiSkills.map((skill, index) => (
                  <div key={index} className="skill-icon-card">
                    <i className={skill.icon} style={{ color: skill.color }}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-block">
            <h3 className="skills-heading">
              <i className="fas fa-users"></i> Soft Skills:
            </h3>
            
            <div className="skill-category">
              <div className="soft-skills-tags">
                {softSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;