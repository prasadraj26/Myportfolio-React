import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-content">
        <div className="experience-item">
          <h3>Software Developer</h3>
          <p className="company">Your Company Name</p>
          <p className="duration">2022 - Present</p>
          <p className="description">Description of your role and responsibilities.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;