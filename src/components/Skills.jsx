import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const frontendSkills = [
    { name: 'HTML', icon: 'fa-brands fa-html5' },
    { name: 'CSS', icon: 'fa-brands fa-css3-alt' },
    { name: 'JavaScript', icon: 'fa-brands fa-js' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
    { name: 'React Js', icon: 'fa-brands fa-react' },
    { name: 'Redux', icon: 'fa-brands fa-reacteurope' }
  ];
  
  const otherSkills = [
    { name: 'Git', icon: 'fa-brands fa-git-alt' },
    { name: 'GitHub', icon: 'fa-brands fa-github' },
    { name: 'Netlify', icon: 'fa-solid fa-cloud' },
    { name: 'VS Code', icon: 'fa-solid fa-code' },
    { name: 'Vite', icon: 'fa-solid fa-bolt' },
    { name: 'Chrome DevTools', icon: 'fa-brands fa-chrome' }
  ];
  
  return (
    <section id="skills">
      <h2>Skills</h2>
      <p>Here are some of my skills on which I have learnt.</p>
      <div className="skills-container">
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill-grid">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <i className={skill.icon}></i>{skill.name}
              </div>
            ))}
          </div>
        </div>
        <div className="skill-card">
          <h3>Others</h3>
          <div className="skill-grid">
            {otherSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <i className={skill.icon}></i>{skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;