import './Portfolio.css';
import ProjectCard from './ProjectCard';
import ExploreAllButton from './ExploreAllButton';

const Portfolio = () => {
  const projects = [
    {
      title: 'Blinkit Data Analysis',
      image: '/images/blinkit.jpeg',
      tags: ['Power BI', 'Data Analysis', 'Dashboard'],
      link: 'https://github.com/Shreyashvekariya/projects/tree/main/BlinKit-Data-Analysis'
    },
    {
      title: 'Vastra Rent',
      image: '/images/vastrarent.jpg',
      tags: ['HTML', 'CSS', 'Java Script'],
      link: 'https://github.com/shreyashvekariya/VASTRA-RENT'
    },
    {
      title: 'friendship day',
      image: '/images/frndship.jpg',
      tags: ['front-end dev'],
      link: 'https://github.com/shreyashvekariya/friendship'
    },
    
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="underline"></div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
        
        <div className="explore-all-button-container">
          <ExploreAllButton link="https://github.com/shreyashvekariya" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
