import React from 'react';
import '../styles/Education.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-list">
          {/* Education 1 */}
          <div className="education-item">
            <div className="education-year">2023 - Present</div>
            <h3 className="education-degree">Bachelor's Degree</h3>
            <h4 className="education-institution">Kongu Engineering College</h4>
            <p className="education-field">Artificial Intelligence & Data Science</p>
            <p className="education-description">
              Pursuing degree with focus on software development and data AI technologies.
            </p>
          </div>

          {/* Education 2 */}
          <div className="education-item">
            <div className="education-year">2022 - 2023</div>
            <h3 className="education-degree">Higher Secondary Education</h3>
            <h4 className="education-institution">ST MARY'S MATRIC HIGHER SECONDARY SCHOOL</h4>
            <p className="education-field">Computer Science</p>
            <p className="education-description">
              Completed higher secondary education with 76% marks.
            </p>
          </div>

          {/* Education 3 */}
          <div className="education-item">
            <div className="education-year">2020 - 2021</div>
            <h3 className="education-degree">Secondary School Education</h3>
            <h4 className="education-institution">ST MARY'S MATRIC HIGHER SECONDARY SCHOOL</h4>
            <p className="education-field">General Studies</p>
            <p className="education-description">
              Completed secondary education with 76% marks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;