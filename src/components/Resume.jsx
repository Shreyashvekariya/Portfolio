import './Resume.css';

const Resume = () => {
  const education = [
    {
      title: 'B.Tech-CSE',
      date: '2022 - 2026',
      description: 'Parul University - Vadodara'
    },
    {
      title: 'Higher Secendory Education',
      date: '2022',
      description: 'Vedant Public School'
    }
  ];

  const experience = [
    {
      title: 'Congifyz Technologies',
      date: 'Nov 2025 - Dec 2025',
      description: ''
    }
  ];

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="underline"></div>
        <div className="resume-content">
          <div className="resume-column">
            <h3 className="resume-subtitle">Education</h3>
            {education.map((item, index) => (
              <div key={index} className="resume-item">
                <h4 className="resume-title">{item.title}</h4>
                <span className="resume-date">{item.date}</span>
                <p className="resume-description">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="resume-column">
            <h3 className="resume-subtitle">Experience</h3>
            {experience.map((item, index) => (
              <div key={index} className="resume-item">
                <h4 className="resume-title">{item.title}</h4>
                <span className="resume-date">{item.date}</span>
                <p className="resume-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-download">
          <a href="https://drive.google.com/file/d/18UP2FfV-ES1ZA9Uf4TFz5HOhQQQVeT8H/view?usp=sharing" className="download-btn">Download Full Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
