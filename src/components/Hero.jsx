import './Hero.css';
import Card from './Card';
import Particles from './Particles';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <Particles
        particleColors={['#E8E5E0', '#E8E5E0']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
      />
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-title">
            <h1 className="greeting">Hello, I Am</h1>
            <h1 className="name1">Shreyash</h1>
            <h1 className="name2">Vekariya</h1>
          </div>
          
          <p className="hero-description">
           A Computer Science student with a traditional mindset and a modern skillset. Passionate about turning data into smart decisions and real-world impact.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="hero-btn hero-btn-primary">
              <div className="hero-btn-inner">
                <span>Get in Touch</span>
              </div>
            </a>
            <a href="https://drive.google.com/file/d/18UP2FfV-ES1ZA9Uf4TFz5HOhQQQVeT8H/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-secondary">
              <div className="hero-btn-inner">
                <span>Resume</span>
              </div>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Hero;
