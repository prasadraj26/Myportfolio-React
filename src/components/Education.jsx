import React from 'react';
import '../styles/Education.css';

function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "ABC College of Engineering",
      year: "2020 - 2024",
      percentage: "85%"
    },
    {
      degree: "Higher Secondary Education",
      institution: "XYZ Higher Secondary School",
      year: "2018 - 2020",
      percentage: "88%"
    },
    {
      degree: "Secondary School Education",
      institution: "PQR Matriculation School",
      year: "2018",
      percentage: "90%"
    }
  ];
  
  return (
    <section id="education">
      <h2>Education</h2>
      <p>My academic journey and qualifications</p>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-dot"></div>
            <div className="education-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <span className="year">{edu.year}</span>
              <span className="percentage">Percentage: {edu.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;