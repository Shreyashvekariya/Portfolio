import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="nav">
      <div className="nav-brand">
        <span className="nav-name">SHREYASH VEKARIYA</span>
      </div>
      <div className="nav-links">
        {['home', 'about', 'skills', 'portfolio', 'resume', 'contact'].map(section => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-link ${activeSection === section ? 'active' : ''}`}
            onClick={(e) => handleClick(e, section)}
          >
            {section === 'portfolio' ? 'Projects' : section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
