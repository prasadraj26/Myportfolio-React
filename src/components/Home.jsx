import React from 'react';
import '../styles/Home.css';
import profile from '../assets/images/pp photo.jpeg';
import resume from '../assets/resume.pdf';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          
          <img 
            src={profile} 
            alt="Prasad profile" 
            className="profile" 
          />

          <h1 className="home-title">PRASADRAJ V</h1>

          <p className="home-subtitle">
            College Student | Aspiring Professional
          </p>

          <p className="home-description">
            Dedicated and passionate student with a keen interest in technology and professional skills.
          </p>

          <div className="button-group">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href={resume} className="btn-resume" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-download"></i> Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;