import React from 'react';
import '../styles/Home.css';
import profilePhoto from '../assets/images/pp photo.jpeg';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <img className="profile-photo" src={profilePhoto} alt="Profile photo" />
          <h1 className="home-title">PRASADRAJ V</h1>
          <p className="home-subtitle">College Student | Aspiring Professional</p>
          <p className="home-description">Dedicated and passionate student with a keen interest in technology and professional skills.</p>
          <a href="#contact" className="btn-primary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Home;