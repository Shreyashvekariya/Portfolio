import { useState, useRef, useEffect } from 'react';
import './About.css';
import SocialCard from './SocialCard';

const About = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const timerRef = useRef(null);
  const aboutRef = useRef(null);

  // Scroll-based visibility effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show card when About section is in view (at least 30% visible)
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setIsScrollVisible(true);
          } else {
            setIsScrollVisible(false);
          }
        });
      },
      {
        threshold: [0, 0.3, 0.5, 0.7, 1.0],
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Hover effect with 3-second timer
  const handleImageHover = () => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Show the card
    setIsCardVisible(true);

    // Hide the card after 3 seconds
    timerRef.current = setTimeout(() => {
      setIsCardVisible(false);
    }, 3000);
  };

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="underline"></div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
               I'm <span className="highlight-name">Shreyash Vekariya</span>, a Computer Science and Engineering student driven by a strong interest in Data Science, Data Analytics, and Business Analytics. I specialize in transforming complex datasets into meaningful insights through analytics, data visualization, dashboards, and emerging GenAI tools. I focus on identifying trends, optimizing business processes, and delivering data-driven solutions that improve decision-making and overall operational efficiency.
            </p>
          
            
            <a href="https://drive.google.com/file/d/18UP2FfV-ES1ZA9Uf4TFz5HOhQQQVeT8H/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-download-button">
              <svg className="svgIcon" viewBox="0 0 384 512">
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </a>
          </div>
          <div className="about-image">
            <img 
              src="./images/WhatsApp Image 2025-07-23 at 23.38.08_beee562f.jpg"
              alt="Workspace" 
              className="workspace-image"
              onMouseEnter={handleImageHover}
            />
            <div className={`social-card-container ${isScrollVisible || isCardVisible ? 'visible' : ''}`}>
              <SocialCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
