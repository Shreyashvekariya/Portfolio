import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaDownload, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="meteors-container">
        {[...Array(15)].map((_, index) => (
          <div key={index} className="meteor"></div>
        ))}
      </div>
      <div className="container">
        <h2>Contact Me</h2>
        <div className="underline"></div>
        <p className="contact-subtitle">Below are the details to reach out to me!</p>
        
        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>ADDRESS</h3>
            <p>Ahmedabad, Gujarat,<br />India</p>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <h3>CONTACT NUMBER</h3>
            <p>+91 7984291916</p>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h3>EMAIL ADDRESS</h3>
            <p>shreyasvekaria2108@gmail.com</p>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaDownload />
            </div>
            <h3>DOWNLOAD RESUME</h3>
            <a href="https://drive.google.com/file/d/18UP2FfV-ES1ZA9Uf4TFz5HOhQQQVeT8H/view?usp=sharing" className="resume-link" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>

        <div className="social-section">
          <p className="social-title">Find me on :</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/shreyashvekariya/" className="social-link"><FaLinkedin /></a>
            <a href="https://github.com/Shreyashvekariya" className="social-link"><FaGithub /></a>
            <a href="mailto:shreyasvekaria2108@gmail.com" className="social-link"><FaEnvelope /></a>
            <a href="https://www.instagram.com/shreyas_023/" className="social-link"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
