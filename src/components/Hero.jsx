import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
// import profileImage from '../assets/images/1000031304.png';
// import resume from '../assets/resume.pdf';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Web Developer', 'React Developer', 'Frontend Developer'];
  
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[Math.floor(index / words[0].length) % words.length];
      
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }
      
      let speed = isDeleting ? 50 : 100;
      
      if (!isDeleting && displayText === currentWord) {
        speed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex(index + 1);
        speed = 500;
      }
      
      setTimeout(handleTyping, speed);
    };
    
    const timer = setTimeout(handleTyping, 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);
  
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <h1>Hi, I am<br />Prasadraj V</h1>
        <h2>I am a <span className="highlight">{displayText}<span className="typed-cursor">|</span></span></h2>
        <p className="hero-desc">
          A skilled React developer with a strong portfolio, passionate about staying updated on frontend tech.
          Collaborative and committed to quality, you thrive in dynamic teams. Eager to contribute creativity and bring innovative ideas to life.
        </p>
        <a href="#" className="resume-btn" target="_blank" rel="noopener noreferrer">Check Resume</a>
      </div>
      <div className="hero-image">
        <img src="https://via.placeholder.com/300" alt="Profile Photo" />
      </div>
    </section>
  );
}

export default Hero;