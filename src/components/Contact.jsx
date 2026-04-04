import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Using Formspree or similar service
    try {
      const response = await fetch('https://formspree.io/f/xwpqrzjz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  
  return (
    <section id="contact">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for collaborations or just to say hello! I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
          <div className="contact-details">
            <a href="mailto:prasad2611v@gmail.com" className="contact-detail-item">
              <i className="fa-solid fa-envelope"></i>
              <span>prasad2611v@gmail.com</span>
            </a>
            <a href="tel:6384153370" className="contact-detail-item">
              <i className="fa-solid fa-phone"></i>
              <span>6384153370</span>
            </a>
            <div className="contact-detail-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Salem, TamilNadu, India</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/prasadraj26" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="send-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <i className="fa-solid fa-paper-plane"></i>
            </button>
            {status === 'success' && <div className="form-messages success">Message sent successfully!</div>}
            {status === 'error' && <div className="form-messages error">Error sending message. Please try again.</div>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;