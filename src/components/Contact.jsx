import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyOFm-MpSYgX4JWny2w-yA_BLogygOI1Iwj8edN1pZhX6p-YUf7wSZ4fqfdoiZt36tOBQ/exec",
        {
          method: "POST",
          body: JSON.stringify(formData)
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            Feel free to reach out for collaborations or just to say hello!
            I'm always open to discussing new projects and opportunities.
          </p>

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
              <span>Salem, Tamil Nadu, India</span>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <i className="fa-solid fa-paper-plane"></i>
            </button>

            {status === "success" && (
              <div className="form-messages success">
                ✅ Message sent! Check your email.
              </div>
            )}

            {status === "error" && (
              <div className="form-messages error">
                ❌ Failed. Try again.
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;